import React from "react";
import "../../assets/sass/layout/Header.scss";

export const Header = () => {
  return (
    <header className="App-header">
      <div className="App-header-logo">
        <img src="../LOGO.svg" alt="Logo Kaza"></img>
      </div>
      <nav className="App-header-nav">
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
};
