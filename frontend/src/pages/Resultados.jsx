import { useEffect, useState } from "react";
import "./Resultados.css";

export default function Resultados() {
  const [partidos, setPartidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Llamamos al backend para obtener los partidos
    fetch("http://localhost:3000/partidos")
      .then((res) => res.json())
      .then((data) => {
        setPartidos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener los partidos:", err);
        setCargando(false);
      });
  }, []);

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
        {partidos.map((partido) => (
          <div className="partido-card" key={partido.id}>
            <div className="equipos">
              <span className="local">{partido.local}</span>
              <span className="vs">vs</span>
              <span className="visitante">{partido.visitante}</span>
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
        ))}
      </div>
    </div>
  );
}
