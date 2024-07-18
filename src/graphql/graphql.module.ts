import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphqlResolver } from './graphql.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
  ],
  providers: [GraphqlResolver, PrismaService],
})
export class GraphqlModule {}
