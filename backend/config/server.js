import express from "express";
import Cors from "cors";
import createError from "http-errors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
//? rutas
import routes from "../src/routes/index.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //? middlewares
    this.middlewares();
    //? consumir rutas
    this.routes();
  }
  middlewares() {
    //? allow CORS (Cross-Origin Resource Sharing) for all origins
    this.app.use(Cors());
    //? view engine setup
    this.app.set("views", path.join(__dirname, "../src/views"));
    this.app.set("view engine", "pug");
    //? logs all requests to the console
    this.app.use(logger("dev"));
    //? parses incoming requests with JSON payloads
    this.app.use(express.json());
    //? parses incoming requests with urlencoded payloads
    this.app.use(express.urlencoded({ extended: false }));
    //? parses cookie header and populate req.cookies
    this.app.use(cookieParser());
    //? serves static files located in public
    this.app.use(express.static(path.join(__dirname, "../public")));
    //? atrapa errores 404 y los envía al manejador de errores
  }
  routes() {
    this.app.use("/", routes);

    //! catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      next(createError(404));
    });

    // error handler
    this.app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page in folder views with file error.pug
      res.status(err.status || 500);
      res.render("error");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port " + this.port);
    });
  }
}

export default Server;
