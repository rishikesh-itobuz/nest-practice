import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/rest/users/user.service';
import { UsersController } from 'src/rest/users/users.controller';
import { RestController } from './rest.controller';
import { RestService } from './rest.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [RestController, UsersController],
  providers: [RestService, UserService, PrismaService],
})
export class RestModule {}
