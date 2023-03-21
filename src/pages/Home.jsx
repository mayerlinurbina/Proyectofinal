import Button from "../components/button"
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
                          
            <div className="banner-home">
                <img className='w-25' src="/assets/mama.png" alt=""/>
                    <h1>BOLSOS LISTOS PARA EL NACIMIENTO DE TU BEBE</h1>
                <Link to='/'>
                    <Button>Comprar ahora</Button>
                </Link>
            </div>
            <div>
                <Link to="/categoria/bebe">
                    <img src="" alt=""/>
                    <h2>Productos bebe</h2>
                </Link>
               
            </div>
            <div>
                <Link to="/">
                    <img src="" alt=""/>
                    <h2>Productos mamá</h2>
                </Link>
            </div>
        </div>
    )
}
export default Home