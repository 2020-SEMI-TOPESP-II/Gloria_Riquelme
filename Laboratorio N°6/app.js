require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDb = require('./dbConfig.js');
const Estudiantes = require('./models/Estudiantes');

const PORT = 3000;

const ESTUDIANTES = [
  
  {
    nombre: "Gloria Riquelme",
    edad: 23,
  },
  {
    nombre: "Zianni Pitt�",
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
 
app.get('/api/estudiantes/', async (req, res) => {
const estudiantes = await Estudiantes.find().select('nombre edad');
res.json({
    estudiantes,
    cantidad: estudiantes.length
  });
});
 
app.post('/api/estudiantes/', async (req, res) => {
  const { nombre, edad } = req.body;
  await Estudiantes.create({ nombre, edad });
  res.json({ nombre, edad });
});

app.get('/api/estudiantes/:id', async (req, res) => {
  try {
   const estudiantes = await Estudiantes.findById(req.params.id).select('nombre edad');  
   res.json(estudiantes);
}
  catch (error) {
    console.log(error);
    res.json ({});
}
});

app.put('/api/estudiantes/:id', async (req, res) => {
    const { nombre, edad }= req.body;
    await Estudiantes.update({nombre, edad});
   return res.send(`La lista ha sido modificada.`);
});

app.delete('/api/estudiantes/:id', async (req, res) => {
    await Estudiantes.findOneAndDelete(req.params.id);
return res.send (`El estudiante ${req.params.id} ha sido eliminado.`);
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto ${PORT}`);
    });
 });
