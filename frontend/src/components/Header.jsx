import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  
  const location = useLocation();

  // Extraemos la liga actual según la ruta:
  // "/laliga" → "laliga"
  // "/clasificacion/laliga" → "laliga"
  // "/resultados/laliga" → "laliga"
  
  const ruta = location.pathname.split("/").filter(Boolean);
  const ligaActual = ruta[0] === "clasificacion" || ruta[0] === "resultados"
    ? ruta[1]
    : ruta[0];

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
