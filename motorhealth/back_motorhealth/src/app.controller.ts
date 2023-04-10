import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/object')
  getObjeto(): any {
    return this.appService.getObject();
  }

  @Post('/register')
  registerUser(): Promise<any> {
    return <any>{
      msg: 'ok',
    };
  }
}
