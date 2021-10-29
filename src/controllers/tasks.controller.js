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
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskCtrl = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

const postTaskCtrl = async (req, res, next) => {
  const { title, description } = req.body; // Desestructuramos
  try {
    const newTask = {
      title,
      description,
    };
    // Enviamos la tarea al servicio
    const response = await addTask(newTask);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    const task = req.body;
    // Enviamos la tarea al servicio
    await updateTask(parseInt(id, 10), task);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    // Enviamos la tarea al servicio
    await deleteTask(parseInt(id, 10));
    res.status(204).json();
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
