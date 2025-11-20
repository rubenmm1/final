import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Resultados.css";

export default function Resultados() {
  const { leagueSlug } = useParams();
  const [partidos, setPartidos] = useState([]);
  const [nombreLiga, setNombreLiga] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!leagueSlug) return;

    setCargando(true);

    fetch(`http://localhost:3000/api/partidos/slug/${leagueSlug}`)
      .then(res => res.json())
      .then(data => {
        setPartidos(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al obtener partidos:", err);
        setCargando(false);
      });

    const nombreMap = {
      "laliga": "LaLiga",
      "premier-league": "Premier League",
      "serie-a": "Serie A",
      "bundesliga": "Bundesliga",
      "ligue-1": "Ligue 1"
    };

    setNombreLiga(nombreMap[leagueSlug] || "Partidos");

  }, [leagueSlug]);

  if (cargando) {
    return (
      <div className="resultados-page">
        <p className="cargando">Cargando partidos...</p>
      </div>
    );
  }

  return (
    <div className="resultados-page">
      <h1 className="titulo">Resultados – {nombreLiga}</h1>

      <div className="partidos-lista">
        {partidos.length === 0 ? (
          <p className="sin-partidos">No hay partidos disponibles.</p>
        ) : (
          partidos.map(partido => (
            <div className="partido-card" key={partido._id}>
              <div className="equipos">
              <span className="local">{partido.local?.nombre}</span>
              <span className="vs">vs</span>
              <span className="visitante">{partido.visitante?.nombre}</span>
            </div>


              <div className="hora">
                {new Date(partido.hora).toLocaleString("es-ES", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
