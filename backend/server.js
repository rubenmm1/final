import express from 'express';

// fs (File System): Nos permite leer y escribir archivos
import fs from 'fs';

// path: Nos ayuda a manejar rutas de archivos de forma correcta
import path from 'path';

// cors: Permite que nuestro frontend se comunique con el backend
import cors from 'cors';

// fileURLToPath: Necesario para obtener la carpeta actual en módulos ES6
import { fileURLToPath } from 'url';


// Crear nuestra aplicación web usando Express
const app = express();
