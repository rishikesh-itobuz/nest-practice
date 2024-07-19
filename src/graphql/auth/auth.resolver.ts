import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserLoginInput } from './dto/user-login.input';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => String, { name: 'userLogin' })
  userLogin(@Args('userLoginInput') userLoginInput: UserLoginInput) {
    return this.authService.userLogin(userLoginInput);
  }
}
