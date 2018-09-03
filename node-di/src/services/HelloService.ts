import { Injectable } from "injection-js";
import "reflect-metadata";

@Injectable()
export class HelloService {

  public async hello() {
    return {
      message: 'hello'
    }
  }
}
