import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useFavoritosContext } from "../context/favoritoContext"

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();

  useEffect(() => {
    console.log(favoritos)
  }, [favoritos])

  return (
    <div>
      <h1 className="text-center py-4">Favoritos</h1>
      <div className="card-container">
        {favoritos.map((publicacion) => (
            <ProductCard 
              title={publicacion.title}
              description={publicacion.description}
              price={publicacion.price}
              src={publicacion.img}
              producto={publicacion}
          />
        ))}
      </div>
    </div>
  );
}