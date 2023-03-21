import { useEffect } from "react";
import Card from "../components/card";
import { useFavoritosContext } from "../context/favoritoContext"

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();

  useEffect(() => {
    console.log(favoritos)
  }, [favoritos])

  return (
    <div>
      <h1>Favoritos</h1>
      <ul className="img-container">
        {favoritos.map((publicacion) => (
            <Card 
              title={publicacion.title}
              description={publicacion.description}
              price={publicacion.price}
              src={publicacion.img}
              producto={publicacion}
          />
        ))}
      </ul>
    </div>
  );
}