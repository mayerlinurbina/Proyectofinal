import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../context/carritoContext";

export default function CartItem({ producto }) {
  const { agregarAlCarrito, carrito, quitarUnoDelCarrito, quitarProductoDelCarrito } = useCartContext();

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="me-3"
            src={producto.img}
            alt={producto.title}
            width="100"
          />
          <div>
            <h5 className="mb-0">{producto.title}</h5>
            <small className="text-muted">${producto.price}</small>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <div>
            <FontAwesomeIcon onClick={() => quitarProductoDelCarrito(producto)} icon={faTrash} />
          </div>
          <div className="d-flex gap-1">
            <button onClick={() => quitarUnoDelCarrito(producto)} className="btn btn-outline-danger btn-sm">-</button>
            <button className="btn btn-outline-dark btn-sm disabled">{carrito.productos.find(productoEnCarrito => productoEnCarrito.id === producto.id).cantidad}</button>
            <button onClick={() => agregarAlCarrito(producto)} className="btn btn-outline-primary btn-sm">+</button>
          </div>
        </div>
      </div>
    </li>
  );
}