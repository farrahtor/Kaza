import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../assets/sass/layout/Main.scss";
import { Home } from "../pages/Home";
import { About } from "../pages/About.jsx";

import { Housing } from "../pages/Housing";
import { ErrorPage } from "../pages/ErrorPage";

export const Main = () => {
  return (
    <main className="App-main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="housing" element={<Housing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
