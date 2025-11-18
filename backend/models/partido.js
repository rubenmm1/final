import mongoose from 'mongoose';

// Definimos el esquema
const partidoSchema = new mongoose.Schema({
  liga:  { type: mongoose.Schema.Types.ObjectId, ref: 'Liga', required: true },
  local: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo', required: true },
  visitante:  {type: mongoose.Schema.Types.ObjectId, ref: 'Equipo', required: true },
  hora:  {type: String, required: true, trim: true, index: true  },
  dia: { type: String, required: true, trim: true, index: true }
}, { timestamps: true });



// Creamos el modelo
const Partido = mongoose.model('Partido', partidoSchema);

export default Partido;