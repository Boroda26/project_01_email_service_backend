import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
     return 'nestjs backend app for email service test777';
  }
}
