import * as express from "express";
import { Injectable } from "injection-js";
import { HttpError } from "../../models/HttpError";
import { HelloService } from "../../services/HelloService";
import "reflect-metadata";

@Injectable()
export class HelloWorldRoute {
  constructor(private helloService: HelloService) {
  }

    public async greet(req, res) {
      try {
        const result = await this.helloService.hello();
        res.status(200).json(result);
      } catch (err) {
        if (err instanceof HttpError) {
          return res.sendStatus(err.code).send(err.message);
        }
        return res
          .status(500)
          .send({ code: 500, message: `internal server error!` });
      }
    }
}
