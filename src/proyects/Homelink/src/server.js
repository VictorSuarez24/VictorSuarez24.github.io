const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Hardcodea el token directamente aquí
const token = 'Bearer ' + process.env.TOKEN;

const haURL = 'http://192.168.1.200:8123';  // Verifica que esta IP sea accesible
const sqlURL = 'http://localhost:3306'

// Ruta para encender la luz
app.post('/api/services/light/turn_on', async (req, res) => {
  console.log('on')
  try {
    const response = await axios.post(`${haURL}/api/services/light/turn_on`, req.body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error al encender:', err.message);
    res.status(err.response?.status || 500).send('Error al encender la luz');
  }
});

// Ruta para apagar la luz
app.post('/api/services/light/turn_off', async (req, res) => {
  console.log('off')
  try {
    const response = await axios.post(`${haURL}/api/services/light/turn_off`, req.body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error al apagar:', err.message);
    res.status(err.response?.status || 500).send('Error al apagar la luz');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});
