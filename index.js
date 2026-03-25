const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo desde Express lol xdddd Viva Jojos!!!');
});

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Orlando Eliezer Lomas Reyes',
    rol: 'Estudiante'
  };

  res.json(usuario);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});