import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
     return 'Hello World from new CI/CD! and spec folder for app!';
  }
}
