import { Injector, ReflectiveInjector } from 'injection-js'
import 'reflect-metadata'
import { registryEntries, asyncRegistryEntries } from './registry.entries'


export class Registry {
  private injector: Injector

  constructor() {
    this.injector = ReflectiveInjector.resolveAndCreate([
      ...registryEntries,
      ...asyncRegistryEntries
    ])
  }

  public getBean(bean) {
    return this.injector.get(bean)
  }

  public getAsyncBeans() {
    return asyncRegistryEntries.map(bean => this.getBean(bean))
  }

}

export default new Registry()
