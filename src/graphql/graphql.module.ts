import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphqlResolver } from './graphql.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error) => {
        const graphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
          code: error.extensions?.code || 'SERVER_ERROR',
          name: error.extensions?.exception?.name || error.name,
        };
        return graphQLFormattedError;
      },
    }),
    UsersModule,
    AuthModule,
  ],
  providers: [GraphqlResolver, PrismaService],
})
export class GraphqlModule {}
