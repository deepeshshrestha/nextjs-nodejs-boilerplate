import next from "next";
import application from "./app";
import config from "../../config";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    application.all("*", (req, res) => {
      return handle(req, res);
    });
    application.listen(config.backendAppPort, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on localhost:${config.backendAppPort} - env ${process.env.NODE_ENV}`
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
