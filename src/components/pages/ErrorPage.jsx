import React from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/pages/ErrorPage.scss";

export const ErrorPage = () => {
  return (
    <div id="error-page">
      <div className="error-page">
        <h1 className="error-page-title">404</h1>
        <p className="error-page-msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link className="error-page-link" to={"/"}>
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};
