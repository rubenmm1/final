// src/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import equiposRoutes from './routes/equiposRoutes.js';
// import partidosRoutes from './routes/partidosRoutes.js';

dotenv.config(); // carga las variables del .env

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
await connectDB();

// Rutas principales
app.use('/api/equipos', equiposRoutes);
// app.use('/api/partidos', partidosRoutes);

// Ruta de prueba
app.get('/', (_req, res) => res.json({ ok: true }));


// Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});








































// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// import cors from 'cors';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const PUERTO = 3000;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../frontend')));

// // ✅ Ruta de los archivos JSON
// const ARCHIVO_PARTIDOS = path.join(__dirname, '../frontend/src/data/partidos.json');
// const ARCHIVO_EQUIPOS = path.join(__dirname, '../frontend/src/data/equipos.json');

// // ==============================
// // FUNCIONES AUXILIARES
// // ==============================

// // Leer partidos
// function leerPartidos() {
//   try {
//     const contenido = fs.readFileSync(ARCHIVO_PARTIDOS, 'utf8');
//     const partidos = JSON.parse(contenido);
//     console.log(`📖 Se leyeron ${partidos.length} partidos del archivo`);
//     return partidos;
//   } catch (error) {
//     console.error('❌ Error al leer partidos:', error.message);
//     return [];
//   }
// }

// // ✅ Leer equipos
// function leerEquipos() {
//   try {
//     const contenido = fs.readFileSync(ARCHIVO_EQUIPOS, 'utf8');
//     const equipos = JSON.parse(contenido);
//     console.log(`📖 Se leyeron ${equipos.length} equipos del archivo`);
//     return equipos;
//   } catch (error) {
//     console.error('❌ Error al leer equipos:', error.message);
//     return [];
//   }
// }

// // ==============================
// // RUTAS DE LA API
// // ==============================

// // Obtener todos los partidos
// app.get('/partidos', (req, res) => {
//   const partidos = leerPartidos();
//   res.json(partidos);
// });

// // ✅ Obtener todos los equipos
// app.get('/equipos', (req, res) => {
//   const equipos = leerEquipos();
//   res.json(equipos);
// });

// // ==============================
// // INICIAR SERVIDOR
// // ==============================
// app.listen(PUERTO, () => {
//   console.log(`🚀 Servidor escuchando en http://localhost:${PUERTO}`);
// });
