import express from 'express';

// fs (File System): Nos permite leer y escribir archivos
import fs from 'fs';

// path: Nos ayuda a manejar rutas de archivos de forma correcta
import path from 'path';

// cors: Permite que nuestro frontend se comunique con el backend
import cors from 'cors';

// fileURLToPath: Necesario para obtener la carpeta actual en módulos ES6
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PUERTO = 3000;

// Crear nuestra aplicación web usando Express
const app = express();


const ARCHIVO_PARTIDOS = path.join(__dirname, 'partidos.json');


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));



function leerPartidos() {
    try {
        // Leer el archivo como texto
        const contenido = fs.readFileSync("./webfinal/frontend/src/data/partidos.json", 'utf8');
        
        // Convertir el texto JSON en un array de JavaScript
        // Express.json analiza (parsea) el cuerpo de las peticiones HTTP que lleguen desde el cliente (frontend).
        // Aquí estás leyendo un archivo del disco duro, no una petición del cliente.
        const partidos = JSON.parse(contenido); //Convierte a objeto
        
        console.log(`📖 Se leyeron ${partidos.length} partidos del archivo`);
        return partidos;
    } catch (error) {
        // Si hay un error (archivo no existe, está corrupto, etc.), devolver array vacío
        console.error('❌ Error al leer partidos:', error.message);
        return [];
    }
}


app.get('/partidos', (peticion, respuesta) => {
    const partidos=leerPartidos();
    respuesta.json(partidos); //Convierte a texto plano (JSON)
});


app.listen(PUERTO, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
})
