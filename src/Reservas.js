import React, { useState } from "react";
import "./App.css";

function Reservas() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="seccion-principal">
      <h1>Reserva tu Mesa</h1>
      <p>Asegura tu experiencia gastronómica con nosotros.</p>

      {enviado ? (
        <div style={{ background: "#d1fae5", color: "#065f46", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "20px auto" }}>
          <h3>¡Reserva confirmada con éxito!</h3>
          <p>Te hemos enviado los detalles a tu correo electrónico.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
          <label>
            Nombre completo:
            <input type="text" required style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #d1d5db" }} />
          </label>
          <label>
            Fecha:
            <input type="date" required style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #d1d5db" }} />
          </label>
          <label>
            Número de personas:
            <input type="number" min="1" max="10" required style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #d1d5db" }} />
          </label>
          <button type="submit" style={{ background: "#d97706", color: "white", padding: "10px", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>
            Confirmar Reserva
          </button>
        </form>
      )}
    </main>
  );
}

export default Reservas;