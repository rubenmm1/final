import mongoose from 'mongoose';

// Definimos el esquema
const equipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, index: true }, // índice simple
  posicion: { type: Number, required: true, min: 0 },
  jugadores:  { type: Number, default: 0, min: 0 },
  liga:  { type: mongoose.Schema.Types.ObjectId, ref: 'Liga', required: true },
  puntos: { type: Number, required: true, min: 0 }
}, { timestamps: true });



// Creamos el modelo
const Equipo = mongoose.model('Equipo', equipoSchema);

export default Equipo;