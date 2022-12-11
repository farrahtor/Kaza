import React from "react";
import "../../assets/sass/layout/Main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About.jsx";
import { PageNotFound } from "../pages/PageNotFound";

export const Main = () => {
  return (
    <main className="App-main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pageNotFound" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </main>
  );
};
