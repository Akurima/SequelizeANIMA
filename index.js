const express = require('express');
const sequelize = require('./Config/database');

const usuarioRoutes = require('./Routes/usuarioRoute');
const articuloRoutes = require('./Routes/articuloRoute');

const app = express(); 

app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/articulos', articuloRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada correctamente.');
    app.listen(3000, () => {
      console.log('Servidor escuchando en http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
