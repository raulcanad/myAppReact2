import React, { useState } from "react";

const PrimerCompoente = () => {

  const frutas = ["pera", "manzana", "tomate"];
  const generarFrutas = () => frutas[Math.floor(Math.random() * 3)] + "   " + frutas[Math.floor(Math.random() * 3)] + "    " + frutas[Math.floor(Math.random() * 3)]

  const [nombre, setNombre] = useState("victor")
  const cambiarNombre = () => {
    setNombre(generarFrutas());
  }

  return (
    <div>
      <p>{nombre}</p>

      <button onClick={() => cambiarNombre()}>Clickéame</button>
    </div>
  )
}
export default PrimerCompoente