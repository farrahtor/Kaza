import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <li className="app-header-nav-link">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="app-header-nav-link">
            <NavLink
              to={"about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
