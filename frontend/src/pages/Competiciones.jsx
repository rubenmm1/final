import React from "react";
import Aside from "../components/Aside";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Competiciones.css";

function Competiciones() {
  const competiciones = [
    { nombre: "LaLiga EA Sports", ruta: "/laliga", imagen: "https://media.gq.com.mx/photos/647df9eacd18d7f1c032cf77/master/w_1600%2Cc_limit/LaLiga_logo.jpg" },
    { nombre: "Premier League", ruta: "/premier-league", imagen: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { nombre: "Bundesliga", ruta: "/bundesliga", imagen: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" },
    { nombre: "Serie A", ruta: "/serie-a", imagen: "https://www.soccerbible.com/media/93701/1-serie-a-logo-new.jpg" },
    { nombre: "Ligue 1", ruta: "/ligue-1", imagen: "https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png" },
    { nombre: "Champions League", ruta: "/champions-league", imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png" },
    { nombre: "Europa League", ruta: "/europa-league", imagen: "https://e7.pngegg.com/pngimages/333/104/png-clipart-uefa-champions-league-uefa-europa-league-the-uefa-european-football-championship-uefa-super-cup-skonto-fc-emblem-sport-logo.png" },
  ];

  return (

    
    <div className="competiciones-page">

        <header className="main-header">
            <div className="header-left">⚽ FUTAPP</div>
            <div className="header-right">
                <img src={logo} alt="Logo de la app" className="app-logo" />
            </div>
        </header>

        <Aside />
      <h1 className="titulo">⚽ Competiciones Europeas</h1>
      <div className="grid-competiciones">
        {competiciones.map((liga) => (
          <Link to={liga.ruta} key={liga.nombre} className="tarjeta-competicion">
            <div
              className="tarjeta-fondo"
              style={{ backgroundImage: `url(${liga.imagen})` }}
            ></div>
            <div className="tarjeta-overlay">
              <h2>{liga.nombre}</h2>
              <button>Ver más</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Competiciones;
