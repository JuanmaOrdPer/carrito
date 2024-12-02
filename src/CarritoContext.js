import React, {createContext, useState} from 'react'

const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{
  const [articulos, setArticulos] = useState([]);

  const addArticulo = (articulo) => {
   setArticulos([...articulos, articulo]);
  };

  
  return(
    <CarritoContext.Provider value={{
      articulosCarrito: articulos, 
      addArticulo, 
      }}>
      {children}{}
    </CarritoContext.Provider>
  );
};
export default CarritoContext