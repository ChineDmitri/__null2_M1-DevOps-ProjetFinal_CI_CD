import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/info')
  getHello(): string {
    console.log('b');
    return this.appService.getHello();
  }

  // @Get()
  // getStatic(): any {
  //   const staticPath = path.join(__dirname, '../volume/browser/');
  //   console.log(staticPath);
  //   serveStatic(staticPath);
  // }
}
