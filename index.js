const express = require('./config/express');
const {logger} = require('./config/winston');
const tf = require("@tensorflow/tfjs");

//
//const cors = require("cors");
//const session = require("express-session");
//const app = express();

//

const port = 4000;
express().listen(port);

//
//app.use("/post", require("./src/app/routes/userRoute"));
//
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);