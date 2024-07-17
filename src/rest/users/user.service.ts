import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(res: Response): Promise<void> {
    const userDetails: User[] = await this.prisma.user.findMany();
    res.json({
      data: userDetails,
      success: true,
      message: 'All users details',
    });
  }
}
