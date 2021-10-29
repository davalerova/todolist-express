const { Router } = require('express');
const {
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getTaskCtrl); // Obtener una tarea por su id
router.post('/tasks', postTaskCtrl); // completar la lógica -> actividad
router.put('/tasks/:id', putTaskCtrl); // completar la lógica -> actividad
router.delete('/tasks/:id', deleteTaskCtrl); // completar la lógica -> actividad

// post -> controlador -> servicio
// put -> controlador -> servicio
// delete -> controlador -> servicio

module.exports = router;
