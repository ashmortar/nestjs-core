import { ConfigModule, ConfigService } from '@nestjs/config';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { I18nModule, I18nService } from 'nestjs-i18n';
import { HtmxInterceptor } from './htmx.interceptor';
import type { Config } from '@core/config/app';
import opts from '@core/config/app';
import i18n_opts from '@core/config/i18n';
import type { I18nTranslations } from '@generated/i18n';

describe('HtmxInterceptor', () => {
  let app: TestingModule;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ...opts,
          envFilePath: ['.env.test'],
        }),
        I18nModule.forRoot(i18n_opts),
      ],
    }).compile();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    const config = app.get<ConfigService<Config>>(ConfigService);
    const i18n = app.get<I18nService<I18nTranslations>>(I18nService);
    expect(new HtmxInterceptor(config, i18n)).toBeDefined();
  });
});
