const express = require("express"); //? returns a function
const app = express(); //? returns an object
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const config = require("config");
const debug = require("debug")("app:main");
const dbdebug = require("debug")("app:db");
const userRouter = require("./routes/users");
const homeRouter = require("./routes/home");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.set("view engine", "ejs");
app.set("views", "./views");

if (app.get("env") === "development") {
  debug("morgan is active");
  app.use(morgan("tiny"));
}

dbdebug("Connected to db");

app.use("/", homeRouter);
app.use("/api/users", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
