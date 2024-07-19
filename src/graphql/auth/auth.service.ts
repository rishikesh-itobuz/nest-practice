import { Injectable } from '@nestjs/common';
import { UserLoginInput } from './dto/user-login.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly primaService: PrismaService) {}
  async userLogin(userLoginInput: UserLoginInput) {
    return 'hello token';
  }
}
