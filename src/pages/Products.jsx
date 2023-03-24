import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { CarritoContext } from "../context/carritoContext";
import { useFavoritosContext } from "../context/favoritoContext";

export default function Products() {
    const [publicaciones, setPublicaciones] = useState([]);

    const { productosEnCarrito } = useContext(CarritoContext)
    const { favoritos } = useFavoritosContext();

    const getData = async () => {
        const res = await fetch("/data/publicaciones.json");
        const data = await res.json();
        setPublicaciones(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const [busqueda, setBusqueda] = useState("")
    const [filter, setFilter] = useState("none")

    const [publicacionesFiltradas, setPublicacionesFiltradas] = useState(publicaciones)
    useEffect(() => {
        let publicacionesPorFiltrar = publicaciones;

        if (busqueda) {
            publicacionesPorFiltrar = publicacionesPorFiltrar.filter((publicacion) => publicacion.title.toLowerCase().includes(busqueda.toLowerCase()));
        }


        if (filter !== 'none') {
            publicacionesPorFiltrar = publicacionesPorFiltrar.sort((a, b) => {
                if (filter === 'menor-precio') {
                    if (a.price < b.price) return -1;
                    if (a.price > b.price) return 1;
                } else if (filter === 'mayor-precio') {
                    if (a.price > b.price) return -1;
                    if (a.price < b.price) return 1;
                }
    
                return 0;
            }).map(publicacion => publicacion);
        }

        setPublicacionesFiltradas(publicacionesPorFiltrar);
    }, [busqueda, filter]);

    useEffect(() => {
       setPublicacionesFiltradas(publicaciones)
    },[publicaciones]);
    

    return (
        <div>
            <div className="d-flex mb-4 px-4" style={{ gap: '10px' }}>
                <input type="text" placeholder="Buscar producto" onChange={(e) => setBusqueda(e.target.value)} />
                <select value={filter} name="filter" id="" onChange={(e) => setFilter(e.target.value)}>
                    <option value="none">Ninguno</option>
                    <option value="menor-precio">Menor precio</option>
                    <option value="mayor-precio">Mayor precio</option>
                </select>
            </div>


            <div className="card-container">

                {publicacionesFiltradas.map((publicacion) => (
                    <Card
                        title={publicacion.title}
                        description={publicacion.description}
                        price={publicacion.price}
                        src={publicacion.img}
                        producto={publicacion}
                    />
                ))}
            </div>

        </div>
    )
}