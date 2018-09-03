import { Injectable } from "injection-js";
import "reflect-metadata";

@Injectable()
export class HelloService {

  private async hello() {
    console.log('hello')
    return {
      message: 'hello'
    }
  }
}
