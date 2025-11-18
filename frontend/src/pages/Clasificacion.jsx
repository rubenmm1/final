import { useEffect, useState } from "react";
import "./clasificacion.css";

function Clasificacion() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    // Cargamos los equipos desde el archivo JSON del servidor
    fetch("http://localhost:3000/equipos") // o tu endpoint real
      .then((res) => res.json())
      .then((data) => {
        // Ordenar por posición (de menor a mayor)
        const ordenados = data.sort((a, b) => a.posicion - b.posicion);
        setEquipos(ordenados);
      })
      .catch((error) => console.error("Error al cargar equipos:", error));
  }, []);

  return (
    <div className="clasificacion-page">
      <h1>Clasificación - LaLiga</h1>
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
          {equipos.map((eq) => (
            <tr key={eq.id}>
              <td>{eq.posicion}</td>
              <td>{eq.nombre}</td>
              <td>{eq.puntos}</td>
              <td>{eq.goles_favor}</td>
              <td>{eq.goles_contra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clasificacion;
