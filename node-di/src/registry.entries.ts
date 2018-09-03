import { App } from "./App";
import { HelloWorldRoute } from "./routes/hello-world";
import { HelloService } from "./services/HelloService";
import { SwaggerValidator } from "./utils/SwaggerValidator";

const services = [HelloService];

const routes = [HelloWorldRoute];

const repos = [];

const middlewares = [];

export const asyncRegistryEntries = [ SwaggerValidator ];
export const registryEntries = [
  App,
  ...routes,
  ...services,
  ...repos,
  ...middlewares,
];
