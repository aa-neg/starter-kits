import * as convict from 'convict'
import * as dotenv from 'dotenv'

dotenv.config()

const definitions = {
  PORT: {
    env: 'PORT',
    format: 'port',
    default: 3000
  },
  LOG_LEVEL: {
    env: 'LOG_LEVEL',
    format: '*',
    default: 'info'
  }
}

const schema = convict(definitions)
schema.validate({ allowed: 'strict' })

const config = (name: string): any => {
  if (schema.get(name) != null) {
    return schema.get(name)
  }
  throw new Error(
    'environment variable ' + definitions[name].env + ' is required'
  )
}

export default config