import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Un Viaje Gastronómico sin Fronteras</h1>
      <p>Disfruta lo mejor de la cocina italiana, japonesa, mexicana y mediterránea en un solo lugar.</p>

      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80" 
        alt="Platos de comida internacional" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar beneficio" : "✈️ Desbloquear Plato de Cortesía"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          🍷 ¡Excelente! Tienes una copa de vino o postre internacional de cortesía en tu próxima reserva.
        </p>
      )}
    </main>
  );
}

export default SeccionPrincipal;
