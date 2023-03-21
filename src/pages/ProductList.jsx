import { useEffect, useState } from "react";
import { useFavoritosContext } from "../context/favoritoContext";

export default function ProductList() {
  const [publicaciones, setPublicaciones] = useState([]);

  const { addFavoritos, favoritos } = useFavoritosContext();

  const getData = async () => {
    const res = await fetch("publicaciones.json");
    const data = await res.json();
    setPublicaciones(data);
  };

  useEffect(() => {
    getData();
  }, []);
  // 💗
  return (
    <div>
      <h1 className="title">Nexuby</h1>
      <ul className="img-container">
        {publicaciones.map((publicacion) => {
          const esFavorito = favoritos.filter((favorito) => favorito.id === publicacion.id).length >= 1;

          return (
            <li key={imagen.alt}>
              <div onClick={() => addFavoritos(publicacion)} className="icon">{esFavorito ? '💗' : '🤍'} </div> 
              <img src={publicacion.img}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}