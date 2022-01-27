import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
     return 'Hello World from new CI/CD with local network!!!';
  }
}
