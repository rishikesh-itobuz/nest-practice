import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { GraphQLError } from 'graphql';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    try {
      const configService = new ConfigService();
      const saltValue = configService.get<number>('SALT_ROUND');
      const salt = await bcrypt.genSalt(Number(saltValue));
      const hashedPassword = bcrypt.hashSync(createUserInput.password, salt);

      const userDetails = await this.prisma.user.create({
        data: {
          ...createUserInput,
          password: hashedPassword,
        },
      });
      return userDetails;
    } catch (error) {
      throw new GraphQLError(error.message);
    }
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserInput,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
