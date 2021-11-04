import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private names: string[] = ["Carlos","Diana","Gabriel", "María Alejandra"];

  getHelloMethod(): string[] {
    return this.names;
  }

}
