import React from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/layout/Header.scss";

export const Header = () => {
  return (
    <header className="App-header">
      <div className="App-header-logo">
        <img src="../LOGO.svg" alt="Logo Kaza" />
      </div>
      <nav className="App-header-nav">
        <ul>
          <Link to={"/"}>
            <li className="App-header-nav-link">Accueil</li>
          </Link>
          <Link to={"about"}>
            {" "}
            <li className="App-header-nav-link">A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
