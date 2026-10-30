import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import SeccionPrincipal from "./SeccionPrincipal";
import Catalogo from "./Catalogo";
import Chef from "./Chef";
import Reservas from "./Reservas";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="contenedor-app">
        <Menu />
        <Routes>
          <Route path="/" element={<SeccionPrincipal />} />
          <Route path="/menu" element={<Catalogo />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;