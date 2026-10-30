import React from "react";
import "./App.css";

function Chef() {
  return (
    <main className="seccion-principal">
      <h1>Conoce a nuestro Chef Ejecutivo</h1>
      <p>Una trayectoria internacional dedicada a fusionar la alta cocina con las tradiciones del mundo.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop&q=80" 
          alt="Chef ejecutivo" 
          style={{ width: "280px", borderRadius: "8px", objectFit: "cover" }}
        />
        <div style={{ maxWidth: "400px", textAlign: "left", color: "#1c1917" }}>
          <h3>Chef Marco de Luca</h3>
          <p>Con más de 15 años de experiencia en restaurantes con estrellas Michelin en Europa y Asia, el Chef Marco trae a <strong>Global Bites</strong> una propuesta vanguardista donde cada ingrediente cuenta una historia de origen.</p>
        </div>
      </div>
    </main>
  );
}

export default Chef;