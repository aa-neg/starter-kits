import * as express from 'express'
import * as bodyParser from 'body-parser'
// import config from './config'
import { HelloWorldRoute } from './routes/hello-world'
import * as path from 'path'
import * as swaggerValidator from 'express-ajv-swagger-validation'

export const App
