const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../services/tasks.services');

const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskCtrl = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({
        message: `La tarea con id ${id} no existe`,
      });
    }
  } catch (error) {
    next(error);
  }
};

const postTaskCtrl = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { title, description, due_date, created_at, completed } = req.body; // Desestructuramos
  try {
    const newTask = {
      title,
      description,
      due_date,
      created_at,
      completed,
    };
    // Enviamos la tarea al servicio
    const response = await addTask(newTask);
    res.status(201).json({
      task: response,
      message: 'Se ha agregado la tarea en el sistema',
    });
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    const task = req.body;
    // Enviamos la tarea al servicio
    const response = await updateTask(parseInt(id, 10), task);
    res.status(200).json({
      task: response,
      message: 'Se ha actualizado la tarea en el sistema',
    });
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    // Enviamos la tarea al servicio
    const response = await deleteTask(parseInt(id, 10));
    if (response) {
      res.status(200).json({
        message: 'Se ha eliminado la tarea en el sistema',
      });
    }
    res
      .status(404)
      .json({ message: `La tarea con id ${id} no existe en bases de datos` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
};
