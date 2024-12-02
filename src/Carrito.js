import React, { useContext } from 'react'
import CarritoContext from './CarritoContext'

function Carrito({onClose}) {
const {articulosCarrito} = useContext(CarritoContext);

  return (
    <div> 
    <h2>Carrito</h2> 
    {articulosCarrito.length ===0 ? (<p>Carrito vacío</p>):(
    <ul>
        {articulosCarrito.map((articulo) => (
            <li key = {articulo.id}>
                {articulo.nombre} - {articulo.precio} €
            </li>
        ))}
    </ul>
    )}
    <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default Carrito;