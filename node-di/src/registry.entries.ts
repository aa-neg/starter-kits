import { App } from './App'
import { DefaultRedirectRoute } from './routes/default-redirect'
import { NexusAccountUserApiService } from './services/NexusAccountUserApiService'
import { AuthenticationApiService } from './services/AuthenticationApiService'
import { DefaultRedirectService } from './services/DefaultRedirectService'
import { BrandingApiService } from './services/BrandingApiService'
import { HttpErrorMapping } from './middlewares/HttpErrorMapping'

const services = [
  NexusAccountUserApiService,
  AuthenticationApiService,
  DefaultRedirectService,
  BrandingApiService
]

const routes = [ DefaultRedirectRoute ]

const repos = [ ]

const middlewares = [ HttpErrorMapping ]

export const asyncRegistryEntries = []

export const registryEntries = [App, ...routes, ...services, ...repos, ...middlewares]
