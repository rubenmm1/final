import Equipo from "../models/equipo.js";
import Liga from "../models/liga.js"
import Partido from "../models/partido.js"

class PartidosController {

  // GET /api/productos - Listar todos
  async listarPartidos(req, res) {
    try {
      const partidos = await Partido.find();
      res.json({ status: 'ok', data: partidos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al listar productos' });
    }
  }

  // GET /api/productos/:id - Obtener uno
  // async obtenerEquipos(req, res) {
  //   try {
  //     const { leagueId } = req.params;

  //     const teams = await Equipo.find({ liga_id: leagueId }).sort({ posicion: 1 });

  //     res.json(teams);

  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ status: 'error', message: 'Error al obtener producto' });
  //   }
  // }





  async obtenerPartidosPorSlug(req, res) {
  try {
    const { leagueSlug } = req.params;

    // Buscar la liga usando el slug
    const liga = await Liga.findOne({ slug: leagueSlug });
    if (!liga) {
      return res.status(404).json({ message: 'Liga no encontrada' });
    }

    // Buscar partidos usando el _id de la liga + populate
    const partidos = await Partido.find({ liga: liga._id })
      .populate("local", "nombre")
      .populate("visitante", "nombre")
      .sort({ dia: 1 });

    res.json(partidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener equipos' });
  }
}

  
//  async obtenerEquiposPorNombre(req, res) {
//   try {
//     const { leagueName } = req.params;

//     console.log(leagueName);

//     // Buscar la liga por su nombre
//     const liga = await Liga.findOne({ nombre: leagueName });
//     if (!liga) {
//       return res.status(404).json({ message: 'Liga no encontrada' });
//     }

//     // Buscar equipos usando el _id de la liga
//     const equipos = await Equipo.find({ liga_id: liga._id }).sort({ posicion: 1 });

//     res.json(equipos);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error al obtener equipos' });
//   }
// }



}

export default new PartidosController();
