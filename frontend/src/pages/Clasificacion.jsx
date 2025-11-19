import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./clasificacion.css";

function Clasificacion() {
  const { leagueSlug } = useParams(); // obtenemos el slug de la URL
  const [equipos, setEquipos] = useState([]);
  const [nombreLiga, setNombreLiga] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    console.log(leagueSlug)

    if (!leagueSlug) return;

    setCargando(true);

    // Fetch equipos usando el slug
    fetch(`http://localhost:3000/api/equipos/slug/${leagueSlug}`)
      .then(res => res.json())
      .then(data => {
        setEquipos(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar equipos:", err);
        setCargando(false);
      });

    // Mapear slug a nombre bonito de la liga
    const nombreMap = {
      "laliga": "LaLiga",
      "premier-league": "Premier League",
      "serie-a": "Serie A",
      "bundesliga": "Bundesliga",
      "ligue-1": "Ligue 1"
    };
    setNombreLiga(nombreMap[leagueSlug] || "Clasificación");

  }, [leagueSlug]);

  if (cargando) {
    return <div className="clasificacion-page">Cargando clasificación...</div>;
  }

  return (
    <div className="clasificacion-page">
      <h1>Clasificación – {nombreLiga}</h1>

      <table className="tabla-clasificacion">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>

        <tbody>
          {equipos.map(eq => (
            <tr key={eq._id}>
              <td>{eq.posicion}</td>
              <td>{eq.nombre}</td>
              <td>{eq.puntos}</td>
              <td>{eq.goles_favor ?? "--"}</td>
              <td>{eq.goles_contra ?? "--"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clasificacion;
