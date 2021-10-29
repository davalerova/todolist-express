const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks.routes');
const middlewareError = require('./middlewares/error.middleware');

const app = express();

/*
- routes -> Se encarga de agrupar las rutas y delega la solicitud/respuesta al controlador
- controllers ->
  1. Se encarga de dar respuesta a la solicitud
  2. Obtener los datos de los servicios
  3. Extraer datos de la solicitud y pasarselos a los servicios
- services ->
  1. Obtener los datos desde una fuente (archivo, db, otro servicio externo)
  2. Regresar los datos hacía el controlador
  3. Tratar los datos con respecto a los parametros definidos en el controlador
*/

// routes -> controllers -> services

app.use(express.json());
app.use(cors());
app.use(tasksRoutes);

/*
  next tiene dos usos:
  1. Continuar con la ejecución del siguiente middleware
  2. Mandar un error al middleware para el manejo de errores (siempre y cuando tenga un argumento)
*/

/*
Errores en el servidor:

1. 4xx -> Errores producidos por el cliente (una mala petición)
2. 5xx -> Errores del servidor (error de sintaxis, código mal implementado en el servidor)
*/

// middleware para el manejo de errores
app.use(middlewareError);

module.exports = app;
