import express from 'express';
import payload from 'payload';
import cors from 'cors'; // Importa CORS
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno
const app = express();

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173', // Permitir solicitudes desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true, // Permitir cookies
}));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
  });
};

start();
