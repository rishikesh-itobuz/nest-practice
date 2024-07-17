import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class GraphqlResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello from GraphQL Nest combine!';
  }
}
