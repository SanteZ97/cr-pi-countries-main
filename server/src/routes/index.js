const express = require("express");
const router = express.Router();
const countryRoutes = require("./countryRoutes");
const activityRoutes = require("./activityRoutes");

router.use('/countries', countryRoutes); // Asigna las rutas de países al enrutador en la ruta '/countries'
router.use('/activities', activityRoutes); // Asigna las rutas de actividades al enrutador en la ruta '/activities'

module.exports = router; // Exporta el enrutador para su uso en otros archivos
