import Equipo from "../models/equipo.js";

class EquiposController {

  // GET /api/productos - Listar todos
  async listarEquipos(req, res) {
    try {
      const equipos = await Equipo.find();
      res.json({ status: 'ok', data: productos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al listar productos' });
    }
  }

  // GET /api/productos/:id - Obtener uno
  async obtenerEquipos(req, res) {
    try {
        const { leagueId } = req.params;

        const teams = await Team.find({ leagueId }).sort({ position: 1 });

        res.json(teams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al obtener producto' });
    }
  }
}

export default new EquiposController();
