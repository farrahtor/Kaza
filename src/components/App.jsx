import "../assets/sass/App.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./layout/Header";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About.jsx";
// import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pageNotFound" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Footer />
    </div>
  );
};
export default App;
