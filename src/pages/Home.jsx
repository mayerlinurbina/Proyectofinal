import { Link } from 'react-router-dom'
import { useUserContext } from "../context/userContext"

const Home = () => {
    const {user} = useUserContext();

    return(
        <div>                         
            <div className="banner-home d-flex align-items-center justify-content-between">
                <div style={{ paddingLeft: '2rem' }}>
                    <h1 className="fs-1 mb-4" style={{ maxWidth: '600px' }}>BOLSOS LISTOS PARA EL NACIMIENTO DE TU BEBE</h1>
                    <Link to={user ? '/productos' : '/login'}>
                        <button className="btn btn-outline-secondary">Comprar ahora</button>
                    </Link>
                </div>
                <div>
                    <img className="imagen-mama" src="/assets/mama.png" alt=""/>
                </div>
            </div>
            <div className="enlaces-body">
                <Link to="/categoria/bebe">
                    <img src="" alt=""/>
                    <h2>Productos bebe</h2>
                </Link>
               
            </div>
            <div className="enlaces-body">
                <Link to="/categoria/mama">
                    <img src="" alt=""/>
                    <h2>Productos mamá</h2>
                </Link>
            </div>
        </div>
    )
}
export default Home