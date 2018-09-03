import * as express from "express";
import { Injectable } from "injection-js";
import { HttpError } from "../../models/HttpError";
import { HelloService } from "../../services/HelloService";
import "reflect-metadata";

@Injectable()
export class HelloWorldRoute {
  public router = express.Router();

  public baseRoute = "/hello-world";

  constructor(private helloService: HelloService) {
    this.router.route(`${this.baseRoute}`).get(async (req, res) => {
      try {
        const result = await this.hello();
        return res.send(200).send(result)
      } catch (err) {
        if (err instanceof HttpError) {
          return res.status(err.code).send(err.message);
        }
        return res
          .status(500)
          .send({ code: 500, message: `internal server error!` });
      }
    });
  }

  private async hello() {
    console.log('hello')
    return {
      message: 'hello'
    }
  }
}
