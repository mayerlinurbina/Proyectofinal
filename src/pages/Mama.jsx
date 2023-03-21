import { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import CarritoProvider, { CarritoContext } from "../context/carritoContext";
import { useFavoritosContext } from "../context/favoritoContext";

export default function Mama () {
    const [publicaciones, setPublicaciones] = useState([]);

    const { productosEnCarrito } = useContext(CarritoContext)
    const { favoritos } = useFavoritosContext();

    const getData = async () => {
        const res = await fetch("/data/publicaciones.json");
        const data = await res.json();
        console.log(data)
        setPublicaciones(data.filter(publicacion => publicacion.category === 'mama'));
      };
    
      useEffect(() => {
        getData();
      }, []);
    return(
        <div>
            {publicaciones.map((publicacion) => (
                <Card 
                    title={publicacion.title}
                    description={publicacion.description}
                    price={publicacion.price}
                    src={publicacion.img}
                    producto={publicacion}
                />
            ))}
        </div>
    )
}