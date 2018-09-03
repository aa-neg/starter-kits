import { App } from "./App";
import registry from "./registry";
import { HelloWorldRoute } from "./routes/hello-world";
// import config from "./config";

// const port = config("PORT");
const port = 3000


async () => {
  const app = new App()

}

main()


Promise.all(registry.getAsyncBeans().map(bean => bean.initialized))
  .then(() => {
    console.log('finished: ')
    const app = registry.getBean(App).express;
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
