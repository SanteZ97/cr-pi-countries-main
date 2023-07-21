const { Router } = require("express");
const { getAllActivities,postActivity,deleteActivity  } = require("../controllers/activityControllers")

const activityRoutes = Router();

activityRoutes.get("/", getAllActivities); // Define una ruta GET para obtener todas las actividades en '/'
activityRoutes.post("/", postActivity); // Define una ruta POST para crear una nueva actividad en '/'
activityRoutes.delete("/:id", deleteActivity); // Define una ruta DELETE para eliminar una actividad por su ID en '/:id'

module.exports = activityRoutes; // Exporta el enrutador de actividades para su uso en otros archivos
