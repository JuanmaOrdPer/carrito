import React, { useState } from "react";
import { CarritoProvider } from "./CarritoContext";
import ListaProductos from "./ListaProductos";
import Carrito from "./Carrito";
import "./App.css";

function App() {
  const [iscarritoAbierto, setIsCarritoAbierto]=useState(false);
  
  const abrirCarrito = () =>{
    setIsCarritoAbierto(true);
  };

  const cerrarCarrito=()=>{
    setIsCarritoAbierto(false);
  }

  return (
    <CarritoProvider>
      <header>
        <h1>Articulos Navideños</h1>
        <button className="boton-producto" onClick={abrirCarrito}type="alert">Ver carrito</button>
      </header>
      <div className="container">
        <div className="lista-productos">
          <ListaProductos />
        </div>
        {iscarritoAbierto && (
          <div className={`carrito ${iscarritoAbierto ? "open" : ""}`}>
            <Carrito onClose={cerrarCarrito} />
          </div>
           )}
      </div>
    </CarritoProvider>
  );
}

export default App;

