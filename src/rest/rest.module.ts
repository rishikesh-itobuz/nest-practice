import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { PrismaService } from 'src/prisma.service';
import { RestController } from './rest.controller';
import { RestService } from './rest.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [RestController],
  providers: [RestService, PrismaService],
})
export class RestModule {}
