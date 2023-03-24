import { useContext, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Card from "../components/Card";
import CarritoProvider, { CarritoContext } from "../context/carritoContext";
import { useFavoritosContext } from "../context/favoritoContext";

export default function Categoria () {
    const [publicaciones, setPublicaciones] = useState([]);
    const [noHayProductos, setNoHayProductos] = useState(false);

    const { nombreCategoria } = useParams();

    console.log(nombreCategoria)

    const { productosEnCarrito } = useContext(CarritoContext)
    const { favoritos } = useFavoritosContext();

    const getData = async () => {
        const res = await fetch("/data/publicaciones.json");
        const data = await res.json();
        
        const publicacionesPorCategoria = data.filter(publicacion => publicacion.category === nombreCategoria)

        if (publicacionesPorCategoria.length === 0) {
            setNoHayProductos(true);
        } else {
            setPublicaciones(publicacionesPorCategoria);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);
    return(
        <div>
            <div className="card-container">
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

            {noHayProductos && (
                <h1 className="text-center py-4">Lo sentimos, no existen productos con la categoria "{nombreCategoria}"</h1>
            )}
        </div>
    )
}