import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import dos componentes de página
import HomePage from "../pages/HomePage/HomePage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;