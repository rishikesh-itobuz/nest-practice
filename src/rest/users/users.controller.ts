import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from '@prisma/client';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Res() res: Response): Promise<void> {
    return this.userService.getUsers(res);
  }
}
