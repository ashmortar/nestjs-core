# NestJS Core 🏗️

> A production-ready NestJS foundation for building secure, scalable enterprise applications. Because starting from scratch is so 2015.

A comprehensive NestJS server application template with battle-tested authentication, authorization, and user management patterns. This is the result of repeatedly building the same auth boilerplate and deciding to do it right, once.

## Overview

NestJS Core is a foundational template designed to be extended for various projects. It implements enterprise-grade user authentication and authorization using abstract entities for flexible credential management (magic links, SMS, email/password, etc.).

## Skills Demonstrated

This project showcases professional backend development competencies:

- **Novel TSX Controllers Architecture**: Type-safe HTML rendering directly from NestJS controllers using `.tsx` files. Brings modern component-style development with full TypeScript typing to server-side rendering - a unique approach combining NestJS decorators with JSX syntax for hypermedia responses. This eliminates the template engine layer while maintaining type safety from controller to rendered HTML.

- **Enterprise Framework Expertise**: NestJS with TypeScript, dependency injection, and modular architecture

- **Security-First Design**: Multi-factor authentication, brute-force protection, session management, XSS protection

- **Database Architecture**: Prisma ORM with normalized data models, proper entity relationships, and migration workflows

- **Modern Authentication Patterns**: Magic links, SMS verification, token-based auth, session management with multiple credential types

- **Role-Based Access Control (RBAC)**: Flexible permissions system with roles, granular permissions, and many-to-many relationship modeling

- **API Documentation & Validation**: OpenAPI/Swagger integration with Zod schema validation for type-safe request/response handling

- **Production Observability**: OpenTelemetry instrumentation, Prometheus metrics collection, Jaeger distributed tracing, structured logging with Pino

- **Hypermedia-Driven Architecture**: KitaJS/HTML for server-side JSX rendering, HTMX-compatible endpoints, progressive enhancement patterns

- **Testing & Code Quality**: Jest unit/integration testing, XSS vulnerability scanning, ESLint with timing analysis, Prettier formatting

- **Modern CSS Tooling**: TailwindCSS and UnoCSS utility-first approaches with Flowbite component library integration

## Tech Stack

### Core Framework
- **NestJS** 10.x - Progressive Node.js framework
- **TypeScript** - Static typing and modern JavaScript
- **Node.js** - Runtime environment

### Database & ORM
- **Prisma** - Next-generation ORM with type-safe queries
- **PostgreSQL/MySQL/SQLite** - Database flexibility

### Authentication & Security
- **Passport.js** - Authentication middleware
- **JWT** - JSON Web Tokens for stateless auth
- **bcrypt** - Password hashing
- **XSS Scanner** - Cross-site scripting vulnerability detection

### API & Validation
- **Zod** - TypeScript-first schema validation
- **Swagger/OpenAPI** - API documentation
- **@anatine/zod-nestjs** - Zod integration for NestJS

### Frontend Integration & Rendering
- **KitaJS/HTML** - JSX-based server-side rendering with TypeScript support
- **TSX Controllers** - Novel approach: NestJS controllers written in `.tsx` files that return type-safe HTML components
- **HTMX-ready** - Hypermedia-driven architecture with progressive enhancement
- **TailwindCSS** & **UnoCSS** - Utility-first CSS frameworks with JIT compilation
- **Flowbite** - Production-ready Tailwind component library

### Observability
- **OpenTelemetry** - Distributed tracing and metrics
- **Prometheus** - Metrics collection and monitoring
- **Jaeger** - Distributed tracing backend
- **Pino** - High-performance logging

## Data Model

### User Management Entities

#### **User**
Entry point for authentication, authorization, and personally identifiable information (PII). Central entity linking all user-related data.

#### **Credential**
Stores credential types and values (email, phone, OAuth tokens, etc.). Supports multiple authentication methods per user.

#### **Pii**
Stores user personal information with proper data protection considerations. Separated for privacy and compliance (GDPR, etc.).

#### **LoginAttempt**
Tracks authentication attempts to prevent brute-force attacks. Implements rate limiting and account lockout logic.

#### **VerificationToken**
Multi-purpose tokens for email verification, password reset, magic links, and SMS verification. Time-limited with proper expiration.

#### **Session**
Manages user session lifecycle. Supports both stateful and stateless authentication patterns.

### Authorization Entities

#### **Role**
User roles for coarse-grained access control (e.g., Admin, User, Moderator).

#### **Permission**
Granular permissions for fine-grained access control (e.g., `users:read`, `posts:delete`).

#### **RolePermission**
Many-to-many relationship enabling flexible role-permission assignments.

#### **UserRoles**
Many-to-many relationship for assigning multiple roles to users.

## Features

✅ **Multi-Method Authentication**
- Email/Password with bcrypt hashing
- Magic link authentication
- SMS verification
- Ready for OAuth integration

✅ **Security Hardening**
- Brute-force protection
- Session management
- Token expiration
- XSS protection
- Rate limiting support

✅ **Flexible Authorization**
- Role-based access control (RBAC)
- Permission-based access control
- Hierarchical role system

✅ **Production-Ready Infrastructure**
- Database migrations
- Comprehensive testing setup
- CI/CD ready
- Observability built-in
- Health checks

✅ **Developer Experience**
- Type-safe API with Zod schemas
- Auto-generated Swagger docs
- Hot reload in development
- Prisma Studio for database management

## Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn
- PostgreSQL/MySQL/SQLite database

### Installation

```bash
# Clone the repository
git clone https://github.com/ashmortar/nestjs-core.git
cd nestjs-core

# Install dependencies
npm install

# Setup database
npm run prisma:generate
npm run migrate:dev

# Seed database (optional)
npm run prisma:seed
```

### Development

```bash
# Start development server with hot reload
npm run start:dev

# Watch CSS changes (runs automatically with start:dev)
npm run watch:css

# Open Prisma Studio
npm run prisma:studio
```

### Building for Production

```bash
# Build the application
npm run build

# Run production server
npm run start:prod
```

### Testing

```bash
# Run all tests with XSS scanning
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:cov
```

### Database Management

```bash
# Create a new migration
npm run migrate:dev:create

# Apply migrations
npm run migrate:deploy

# Open Prisma Studio
npm run prisma:studio

# Generate Prisma Client
npm run prisma:generate
```

## Project Structure

```
nestjs-core/
├── src/
│   ├── modules/          # Feature modules
│   ├── common/           # Shared utilities
│   ├── config/           # Configuration
│   └── main.ts           # Application entry point
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
├── test/                 # E2E and integration tests
└── public/               # Static assets
```

## API Documentation

Once running, access the Swagger UI at:
```
http://localhost:3000/api
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nestjs_core"

# JWT
JWT_SECRET="your-secret-key"
JWT_EXPIRATION="1h"

# Application
PORT=3000
NODE_ENV="development"
```

## Extending This Template

This template is designed to be forked and extended:

1. **Fork or clone** the repository
2. **Customize** the User/PII entities for your needs
3. **Add** your domain-specific modules
4. **Extend** the authentication methods as needed
5. **Deploy** with your preferred hosting

## Contributing

This is a personal template project, but feedback and suggestions are welcome via issues.

## License

UNLICENSED - This is a personal template project.

---

**Author:** [Aaron Ross](https://github.com/ashmortar)

*Part of a curated collection of production-ready templates and architectural experiments. This project explores the intersection of type-safe server-side rendering and modern backend frameworks - specifically investigating whether we can achieve the developer experience of component-based frontends while maintaining the simplicity and performance of hypermedia-driven architectures.*
