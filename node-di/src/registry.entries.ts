import { App } from "./App";
import { HelloWorldRoute } from "./routes/hello-world";
import { HelloService } from "./services/HelloService";

const services = [HelloService];

const routes = [HelloWorldRoute];

const repos = [];

const middlewares = [];

export const asyncRegistryEntries = [];
export const registryEntries = [
  App,
  ...routes,
  ...services,
  ...repos,
  ...middlewares
];
