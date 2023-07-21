const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router); // Aquí utilizamos el middleware del enrutador

module.exports = server;
