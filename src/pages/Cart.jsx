import { useContext } from "react";
import CartItem from "../components/CartItem";
import MiContext from "../mi-context"

export default function Cart() {

  const { productosEnCarrito } = useContext(MiContext);

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {productosEnCarrito?.map((item) => (
          <CartItem producto={item} key={item} />
        ))}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: $95.000</b>
        </li>
      </ul>
    </div>
  );
}