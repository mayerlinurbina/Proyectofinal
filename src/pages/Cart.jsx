import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/carritoContext";
import { useUserContext } from "../context/userContext";

export default function Cart() {

  const { carrito } = useCartContext();
  const { user } = useUserContext();

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>

      <div>
        {carrito.cantidadTotal === 0 && (
          <div>
            <h1 className="text-center py-4">Aun no tienes productos en el carrito</h1>
            <Link to={user ? '/productos' : '/login'}>
                <button className="btn btn-outline-secondary">Ir a productos</button>
            </Link>
          </div>
        )}
      </div>

      <ul className="list-group">
        {carrito.productos?.sort((a, b) => {
          // Ordenar alfabeticamente los productos en el carrito
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;

          return 0;
        }).map((item) => (
          <CartItem producto={item} key={item} />
        ))}
        <li className="list-group-item list-group-item-action active text-end">
        <b>Total: ${carrito.precioTotal}</b>
        </li>
      </ul>
      <button className="btn btn-outline-secondary">Ir a pagar</button>
    </div>
  );
}