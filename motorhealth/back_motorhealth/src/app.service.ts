import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any {
    const obj = {
      id: 1,
      nome: 'Mateus',
    };
    return obj;
  }
}
