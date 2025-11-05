import "./Home.css";
import Aside from "../components/Aside";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, BarChart2 } from "lucide-react";

function Home() {
  return (
    <>
      <header className="main-header">
        <div className="header-left">⚽ FUTAPP</div>
        <div className="header-right">
          <img src={logo} alt="Logo de la app" className="app-logo" />
        </div>
      </header>

      <Aside />

      <main id="contenido" className="home-content">
        <motion.div
          className="home-overlay"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Bienvenido a <span>FUTAPP</span></h1>
          <p>
            La aplicación donde podrás seguir los resultados, clasificaciones y estadísticas
            de las grandes competiciones europeas: LaLiga, Premier League, Bundesliga, Serie A y más.
          </p>

          <div className="home-buttons">
            <Link to="/competiciones" className="home-btn primary">
              <Trophy size={20} />
              Ver Competiciones
            </Link>
            <Link to="/clasificacion" className="home-btn secondary">
              <BarChart2 size={20} />
              Clasificaciones
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Home;
