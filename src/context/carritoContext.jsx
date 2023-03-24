import { createContext, useContext, useState } from "react"
export const CarritoContext = createContext({})

export const useCartContext = () => useContext(CarritoContext);

export default function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState({
      productos: [],
      cantidadTotal: 0,
      precioTotal: 0
    });
  
    const agregarAlCarrito = (producto) => {

      const productoYaExisteEnElCarrito = carrito.productos.filter(productoEnCarrito => productoEnCarrito.id === producto.id).length >= 1;

      if (productoYaExisteEnElCarrito) {
        const productoEnElCarrito = carrito.productos.find(productoEnCarrito => productoEnCarrito.id === producto.id);
        const carritoConProductosFiltrados = carrito.productos.filter(productoEnCarrito => productoEnCarrito.id !== producto.id)

        setCarrito({
          productos: [
            ...carritoConProductosFiltrados,
            {
              ...productoEnElCarrito,
              cantidad: productoEnElCarrito.cantidad + 1
            }
          ],
          cantidadTotal: carrito.cantidadTotal + 1,
          precioTotal: carrito.precioTotal + productoEnElCarrito.price
        })
      } else {
        setCarrito({
          productos: [...carrito.productos, {...producto, cantidad: 1}],
          cantidadTotal: carrito.cantidadTotal + 1,
          precioTotal: carrito.precioTotal + producto.price
        });
      }

    }

    const quitarUnoDelCarrito = (producto) => {

      const productoYaExisteEnElCarrito = carrito.productos.filter(productoEnCarrito => productoEnCarrito.id === producto.id).length >= 1;

      if (productoYaExisteEnElCarrito) {
        const productoEnElCarrito = carrito.productos.find(productoEnCarrito => productoEnCarrito.id === producto.id);
        const carritoConProductosFiltrados = carrito.productos.filter(productoEnCarrito => productoEnCarrito.id !== producto.id)

        setCarrito({
          productos: [
            ...carritoConProductosFiltrados,
            {
              ...productoEnElCarrito,
              cantidad: productoEnElCarrito.cantidad - 1
            }
          ],
          cantidadTotal: carrito.cantidadTotal - 1,
          precioTotal: carrito.precioTotal - productoEnElCarrito.price
        })
      }

    }

    const quitarProductoDelCarrito = (producto) => {
      const productoEnElCarrito = carrito.productos.find(productoEnCarrito => productoEnCarrito.id === producto.id);
      const carritoConProductosFiltrados = carrito.productos.filter(productoEnCarrito => productoEnCarrito.id !== producto.id)
      setCarrito({
        productos: carritoConProductosFiltrados,
        cantidadTotal: carrito.cantidadTotal - productoEnElCarrito.cantidad,
        precioTotal: carrito.precioTotal - (productoEnElCarrito.cantidad * productoEnElCarrito.price)
      })
    }
  
    return (
      <CarritoContext.Provider value={{ agregarAlCarrito, carrito, quitarUnoDelCarrito, quitarProductoDelCarrito }}>
        {children}
      </CarritoContext.Provider>
    );
  }