import { createContext, useState } from "react"
export const CarritoContext = createContext({})

export default function CarritoProvider({ children }) {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  
    const agregarAlCarrito = (producto) => {
        setProductosEnCarrito([...productosEnCarrito, producto])
    }
  
    return (
      <CarritoContext.Provider value={{ agregarAlCarrito, productosEnCarrito }}>
        {children}
      </CarritoContext.Provider>
    );
  }