import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../assets/sass/layout/Main.scss";
import { Home } from "../routes/Home";
import { About } from "../routes/About.jsx";

import { Housing } from "../routes/Housing";
import { ErrorPage } from "../routes/ErrorPage";

export const Main = () => {
  return (
    <main className="App-main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="housing/:id" element={<Housing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
