import React from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/layout/Header.scss";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <Link to={"/"}>
          <img src="../LOGO.svg" alt="Logo Kaza" />
        </Link>
      </div>
      <nav className="app-header-nav">
        <ul>
          <Link to={"/"}>
            <li className="app-header-nav-link">Accueil</li>
          </Link>
          <Link to={"about"}>
            {" "}
            <li className="app-header-nav-link">A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
