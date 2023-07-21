const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");

const server = express();  // Crea una nueva instancia de la aplicación Express

server.use(morgan("dev"));  // Agrega el middleware 'morgan' a la aplicación para registrar solicitudes HTTP en modo 'dev'
server.use(express.json());  // Agrega el middleware 'express.json()' para analizar las solicitudes con formato JSON
server.use(cors());  // Agrega el middleware 'cors' para permitir el intercambio de recursos entre dominios

server.use(router);  // Agrega el enrutador a la aplicación para manejar las rutas definidas en './routes/index.js'

module.exports = server;  // Exporta el servidor Express para que pueda ser utilizado en otros archivos
