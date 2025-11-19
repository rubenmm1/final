import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  const location = useLocation();

  // Separar la ruta en segmentos
  const ruta = location.pathname.split("/").filter(Boolean);

  // Identificar liga según el tipo de ruta
  // /clasificacion/laliga → laliga
  // /resultados/laliga → laliga
  // /laliga → laliga
  let ligaActual = null;

  if (ruta.length === 1) {
    // /laliga
    ligaActual = ruta[0];
  } else if (ruta.length === 2 && (ruta[0] === "clasificacion" || ruta[0] === "resultados")) {
    // /clasificacion/laliga o /resultados/laliga
    ligaActual = ruta[1];
  }

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo FutApp" className="logo" />
        </Link>
        <h1 className="title">FUTAPP</h1>
      </div>

      {ligaActual && (
        <nav className="nav">
          <Link to={`/clasificacion/${ligaActual}`} className="navLink">
            Clasificación
          </Link>

          <Link to={`/resultados/${ligaActual}`} className="navLink">
            Resultados
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
