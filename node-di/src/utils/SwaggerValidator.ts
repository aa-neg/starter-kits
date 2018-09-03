import { Injectable } from 'injection-js'
import * as path from 'path'
import * as swaggerValidator from 'express-ajv-swagger-validation'
import 'reflect-metadata'

@Injectable()
export class SwaggerValidator {
  public initialized: Promise<any>

  public validator = swaggerValidator

  constructor() {
      console.log(path.join(__dirname, '../swagger.yaml'))
      this.initialized = swaggerValidator.init(path.join(__dirname, '../swagger.yaml'))
      console.log('this initialized: ', this.initialized)
  }
}