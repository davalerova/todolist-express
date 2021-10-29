const errorHandler = (error, req, res, next) => {
  console.log('error recibido en el middleware para el manejo de errores');
  res.status(500).json({
    message: error.message,
  });
};

module.exports = errorHandler;
