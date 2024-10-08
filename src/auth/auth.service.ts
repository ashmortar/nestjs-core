import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ValidGoogleOauthData } from './google-oauth.strategy';
import { JwtPayload } from './jwt.strategy';
import { SignInDto } from './schemas/sign-in';
import {
  CredentialsService,
  CredentialWithUserPii,
} from '@core/credentials/credentials.service';
import { SessionService } from '@core/session/session.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly sessionService: SessionService,
    private readonly credentialsService: CredentialsService,
  ) {}

  generateJwt(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async oauthSignIn(
    data?: ValidGoogleOauthData,
  ): Promise<CredentialWithUserPii> {
    if (!data) {
      throw new BadRequestException('Invalid user data');
    }

    return this.credentialsService.upsertOauthCredentialUser(data);
  }

  async localSignIn({
    email,
    password,
  }: SignInDto): Promise<CredentialWithUserPii> {
    const credential =
      await this.credentialsService.findLocalUserByEmail(email);
    const valid = await bcrypt.compare(password, credential?.value || '');
    if (!valid || !credential) {
      throw new BadRequestException('Invalid email or password');
    }
    return credential;
  }

  async localRegister({
    email,
    password,
  }: SignInDto): Promise<CredentialWithUserPii> {
    const existing = await this.credentialsService.findLocalUserByEmail(email);
    if (existing) {
      throw new BadRequestException('User already exists');
    }

    return this.credentialsService.createLocalUser(email, password);
  }
}
