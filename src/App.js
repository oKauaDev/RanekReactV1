import "./assets/reset-style.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Produto from "./Pages/Produto";
import Contato from "./Pages/Contato";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
