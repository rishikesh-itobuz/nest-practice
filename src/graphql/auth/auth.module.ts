import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
