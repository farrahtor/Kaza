import React from "react";
import "../../assets/sass/layout/Footer.scss";

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer-bloc">
        <div>
          <img src="../LOGO2.svg" alt="Logo Kaza"></img>
        </div>
        <div>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
