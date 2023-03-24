import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../context/carritoContext";
import { useUserContext } from "../context/userContext";

const ProductDetail = () => {
    const { productoId } = useParams();
    const { user } = useUserContext()
    const { agregarAlCarrito } = useCartContext();

    const [publicacion, setPublicacion] = useState(null);

    const getData = async () => {
        const res = await fetch("/data/publicaciones.json");
        const data = await res.json();
        console.log(data);
        setPublicacion(data.find(publicacion => publicacion.id === parseInt(productoId)));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {publicacion ? (
                <div>
                    <img src={publicacion.img} alt=""/>
                    <h1>{publicacion.title}</h1>
                    <p>Categoria: {publicacion.category}</p>
                    <p>Descripción:</p>
                    <p>{publicacion.description}</p>
                    {user ? (
                        <button className="btn btn-outline-secondary" onClick={() => agregarAlCarrito(publicacion)}>Agregar al carrito</button>
                    ) : (
                        <Link to="/login" className="btn btn-outline-secondary">Agregar al carrito</Link>
                    )}
                </div>
            ) : (
                <div>
                    <h1 className="text-center py-4">No existe este producto.</h1>
                </div>
            )}
        </>
    )
}

export default ProductDetail
