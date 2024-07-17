import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { RestModule } from './rest/rest.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    GraphqlModule,
    RestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
