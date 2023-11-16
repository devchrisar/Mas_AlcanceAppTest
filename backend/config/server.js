const express = require("express");
const Cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//? rutas
const routes = require("../src/routes/index.routes");

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
    //? view engine setup
    this.app.use(Cors());
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "public")));
    //? errores
    // catch 404 and forward to error handler
    this.app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    this.app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render("error");
    });
  }
  routes() {
    this.app.use("/api/", routes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port " + this.port);
    });
  }
}

module.exports = Server;
