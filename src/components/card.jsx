import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useFavoritosContext } from "../context/favoritoContext";
import Button from "./button";

export default function Card({ producto, src, title, description, price }) {

  const {agregarAlCarrito} = useContext(CarritoContext);
  const { addFavoritos, favoritos } = useFavoritosContext();

  const esFavorito = favoritos.filter((favorito) => favorito.id === producto.id).length >= 1;

  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
      <div onClick={() => addFavoritos(producto)} className="icon">{esFavorito ? '💗' : '🤍'} </div> 
        <img
          src={src}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{title}</b>
          </h2>
          <h6>Descripción</h6>
            <p>{description}</p>
          <h5>
            <b>${price}</b>
          </h5>
          <div className="d-flex gap-2">
            {/* <a
              href="/cart"
              className="btn btn-outline-primary"
            >
              Comprar
            </a>
            <a
              href={`/pizzas/${producto.id}`}
              className="btn btn-outline-danger"
            >
              Ver detalles
            </a> */}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </article>
  );
}