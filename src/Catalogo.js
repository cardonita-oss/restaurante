import React from "react";
import "./App.css";

function Catalogo() {
  return (
    <main className="seccion-principal">
      <h1>Nuestro Catálogo Internacional</h1>
      <p>Explora los platos más emblemáticos de cada rincón del mundo.</p>

      <div className="catalogo-grid" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <div style={{ background: "#f5f5f4", padding: "20px", borderRadius: "8px", width: "250px", color: "#1c1917" }}>
          <h3>🇮🇹 Italia</h3>
          <p>Pasta artesanal con salsa trufada y queso parmesano.</p>
        </div>
        <div style={{ background: "#f5f5f4", padding: "20px", borderRadius: "8px", width: "250px", color: "#1c1917" }}>
          <h3>🇯🇵 Japón</h3>
          <p>Rollos de sushi fresco y tempura crujiente.</p>
        </div>
        <div style={{ background: "#f5f5f4", padding: "20px", borderRadius: "8px", width: "250px", color: "#1c1917" }}>
          <h3>🇲🇽 México</h3>
          <p>Tacos al pastor con carne marinada y piña.</p>
        </div>
      </div>
    </main>
  );
}

export default Catalogo;