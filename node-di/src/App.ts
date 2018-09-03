import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as expressLogger from 'express-bunyan-logger'
import * as compression from 'compression'
import config from './config'
import { HttpErrorMapping } from './middlewares/HttpErrorMapping'
import { DefaultRedirectRoute } from './routes/default-redirect'
import { Injectable } from 'injection-js'
import 'reflect-metadata'

@Injectable()
export class App {
  public express: express.Application

  constructor(
    private defaultRedirectRoute: DefaultRedirectRoute,
    private httpErrorMapping: HttpErrorMapping
  ) {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(compression())
    this.express.disable('x-powered-by')
    this.setupExpressLogger()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    this.express.use(
      '/default-redirect',
      setupContextHooks,
      this.defaultRedirectRoute.router
    )
  }

  private setupExpressLogger(): void {
    this.express.use(
      expressLogger({
        name: 'express',
        format:
          ':remote-address :incoming :method :url :status-code :res-headers[content-length] - :response-time ms',
        excludes: '*',
        streams: [{ level: config('LOG_LEVEL'), stream: process.stdout }]
      })
    )
  }
}
