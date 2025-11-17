import mongoose from 'mongoose';

// Definimos el esquema
const ligaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, index: true }, // índice simple
  equipos: { type: Number, required: true, min: 0 }, 
}, { timestamps: true });



// Creamos el modelo
const Liga = mongoose.model('Liga', ligaSchema);

export default Liga;