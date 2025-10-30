import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg";
import Home from "../pages/Home";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo FutApp" className="logo" />
        </Link>
        <h1 className="title">FUTAPP</h1>
      </div>

      <nav className="nav">
        <Link to="/clasificacion" className="navLink">
          Clasificación
        </Link>
        <Link to="/resultados" className="navLink">
          Resultados
        </Link>
      </nav>
    </header>
  );
};

export default Header;
