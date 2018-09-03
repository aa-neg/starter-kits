import * as express from 'express'
import * as bodyParser from 'body-parser'
// import config from './config'
import { HelloWorldRoute } from './routes/hello-world'
import { Injectable } from 'injection-js'
import 'reflect-metadata'
import { SwaggerValidator } from './utils/SwaggerValidator';

@Injectable()
export class App {
  public express: express.Application

  constructor(
    private helloWorld: HelloWorldRoute,
    private swaggerValidator: SwaggerValidator
  ) {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.disable('x-powered-by')
    this.setupExpressLogger()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    this.express.use(
      '/hello-world',
      this.swaggerValidator.validator.validate,
      this.helloWorld.router
    )
  }

  private setupExpressLogger(): void {
    // this.express.use(
    //   expressLogger({
    //     name: 'express',
    //     format:
    //       ':remote-address :incoming :method :url :status-code :res-headers[content-length] - :response-time ms',
    //     excludes: '*',
    //     streams: [{ level: config('LOG_LEVEL'), stream: process.stdout }]
    //   })
    // )
  }
}
