import React, { useContext, useEffect, useState } from 'react';
import CarritoContext from './CarritoContext';

function ListaProductos() {
  const {addArticulo}= useContext(CarritoContext);
  const [articulos, setArticulos] = useState([]);

  const getArticulos = async () => {
      const response = await fetch('./articulos_navidenos.json');
      const data = await response.json(); 
      setArticulos(data);
    
  };

  useEffect(() => {
    getArticulos();
  }, []);

  return (
    <div>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>
           {articulo.id}. {articulo.nombre} - €{articulo.precio}
            <button onClick={() => addArticulo(articulo)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
