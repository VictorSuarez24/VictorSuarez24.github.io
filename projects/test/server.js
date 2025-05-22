const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

// Permitir CORS para cualquier origen (mejor para test)
app.use(cors());

// Middleware para loguear peticiones
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.path}`);
  next();
});

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIwMzBhZDRhNWNjYTA0ZjNkOTJiMzRhOTdlOWJhNTViMCIsImlhdCI6MTc0NzI1ODA1MywiZXhwIjoyMDYyNjE4MDUzfQ.v4EnJcUIHJ9Vb3LcFd2XMQ8OV8qa-mreOVbACZNo8ok';
const haURL = 'http://homeassistant.local:8123';

const sendRequestToHA = async (service, entityId) => {
  if (!entityId) throw new Error('No se proporcionó entity_id');
  try {
    const response = await axios.post(`${haURL}/api/services/light/${service}`, { entity_id: entityId }, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    const msg = err.response?.data?.message || err.message || 'Error desconocido';
    throw new Error(`Error al ${service === 'turn_on' ? 'encender' : 'apagar'} la luz: ${msg}`);
  }
};
app.post('/api/test', (req, res) => {
  res.json({ message: "Ruta test OK" });
});

app.post('/api/light/:action', async (req, res) => {
  const { action } = req.params;
  const { entity_id } = req.body;

  if (!['on', 'off'].includes(action)) {
    return res.status(400).json({ error: 'Acción no válida. Debe ser "on" o "off".' });
  }

  if (!entity_id) {
    return res.status(400).json({ error: 'No se proporcionó entity_id en el cuerpo.' });
  }

  try {
    const result = await sendRequestToHA(`turn_${action}`, entity_id);
    res.json(result);
  } catch (error) {
    console.error('Error en backend:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
app.post('/api/light/:action', async (req, res) => {
  console.log('Entró en /api/light/:action');
  // resto igual
});
