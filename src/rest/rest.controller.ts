import { Controller, Get } from '@nestjs/common';
import { RestService } from './rest.service';

@Controller()
export class RestController {
  constructor(private readonly appService: RestService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
