const { Router } = require("express");
const { getCountries, getCountryById } = require("../controllers/countryControllers.js");

const countryRoutes = Router();

countryRoutes.get("/", getCountries); // Define una ruta GET para obtener todos los países en '/'
countryRoutes.get('/detail/:id', getCountryById); // Define una ruta GET para obtener un país por su ID en '/detail/:id'

module.exports = countryRoutes; // Exporta el enrutador de países para su uso en otros archivos
