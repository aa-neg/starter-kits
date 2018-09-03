import { App } from "./App";
import registry from "./registry";
// import config from "./config";

const app = registry.getBean(App).express;
// const port = config("PORT");
const port = 3000

Promise.all(registry.getAsyncBeans().map(bean => bean.initialized))
  .then(() => {
    app.listen(port, err => {
      if (err) {
        return console.log(err);
      }

      return console.log(`server is listening on ${port}`);
    });
  })
  .catch(error => {
    // logger.error("app failed to be initialized", error);
  });
