import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">🌍 Global Bites</h2>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/menu" className="nav-link">Menú</Link></li>
        <li><Link to="/chef" className="nav-link">Chef</Link></li>
        <li><Link to="/reservas" className="nav-link">Reservas</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;