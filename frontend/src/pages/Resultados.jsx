import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Resultados.css";

export default function Resultados() {
  const { leagueSlug } = useParams(); // obtener slug de la URL
  const [partidos, setPartidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función para combinar fecha + hora en un objeto Date válido
  function combinarFecha(dia, hora) {
    if (!dia || !hora) return null;

    const diaLimpio = dia.trim();     // "2025-11-09"
    const horaLimpia = hora.trim();   // "21:00"

    // Crear fecha ISO válida
    return new Date(`${diaLimpio}T${horaLimpia}`);
  }

  useEffect(() => {
    if (!leagueSlug) return;

    setCargando(true);

    fetch(`http://localhost:3000/api/partidos/slug/${leagueSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setPartidos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener los partidos:", err);
        setCargando(false);
      });
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
      <h1 className="titulo">Resultados y Próximos Partidos</h1>

      <div className="partidos-lista">
        {partidos.map((partido) => {
          const fecha = combinarFecha(partido.dia, partido.hora);

          return (
            <div className="partido-card" key={partido._id}>
              <div className="equipos">
                <span className="local">{partido.local?.nombre}</span>
                <span className="vs">vs</span>
                <span className="visitante">{partido.visitante?.nombre}</span>
              </div>

              <div className="hora">
                {fecha
                  ? fecha.toLocaleString("es-ES", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Fecha no válida"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
