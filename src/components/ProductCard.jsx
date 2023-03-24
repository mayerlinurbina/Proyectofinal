import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/carritoContext";
import { useFavoritosContext } from "../context/favoritoContext";
import { useUserContext } from "../context/userContext";

export default function ProductCard({ producto, src, title, description, price }) {

  const { agregarAlCarrito } = useCartContext();
  const { addFavoritos, favoritos } = useFavoritosContext();
  const { user } = useUserContext()

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
          <h4>
            <b>{title}</b>
          </h4>
          <h6>Descripción</h6>
          <p>{description}</p>
          <h5>
            <b>${price}</b>
          </h5>
          <div className="d-flex gap-2">
            <div className="d-flex align-items-center" style={{ gap: '10px' }}>
              {user ? (
                <button className="btn btn-outline-secondary" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
              ) : (
                <Link to="/login" className="btn btn-outline-secondary">Agregar al carrito</Link>
              )}
              <Link to={`/productos/${producto.id}`}>Ver detalles</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}