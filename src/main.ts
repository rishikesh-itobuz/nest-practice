import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);

  console.log(
    `Application's Rest server is running on: http://localhost:${port}`,
  );
  console.log(
    `Application's GraphQl server is running on: http://localhost:${port}/graphql`,
  );
}
bootstrap();
