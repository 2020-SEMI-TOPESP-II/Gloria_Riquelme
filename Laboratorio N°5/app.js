const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000;

const ESTUDIANTES = [
  
  {
    nombre: "Gloria Riquelme",
    edad: 23,
  },
  {
    nombre: "Zianni Pittí",
    edad: 22,
  },
  {
    nombre: "Rodolfo Marciscano",
    edad: 24,
  },
  {
    nombre: "Seth Delgado",
    edad: 22,
  }
];

// Intermediarios
app.use(bodyParser.json());

 
app.get('/api/estudiantes/', (req, res) => {
  res.json({
    estudiantes: ESTUDIANTES,
    cantidad: ESTUDIANTES.length
  });
});
 
app.post('/api/estudiantes/', (req, res) => {
  console.log('Body: ', req.body); 
  res.json({
    nombre: "Gloria"
  });
});

app.get('/api/estudiantes/:id', (req, res) => {
  res.json(ESTUDIANTES[req.params.id]);
});

app.put('/api/estudiantes/:id', (req, res) => {
  const { nombre, edad }= req.body;
  ESTUDIANTES[req.params.id] = { nombre, edad };
 return res.send(`La lista ha sido modificada`);
});

app.delete('/api/estudiantes/:id', (req, res) => {
  ESTUDIANTES[req.params.id] = { nombre:"", edad: ""}
return res.send (`El estudiante ha sido eliminado ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto ${PORT}`);
});