import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {

  return (
    <div>

      <nav className="navbar">
      <div>
          <img className='Logo' src="/assets/logo.jpg" alt=""/>

        </div>
        <div className= "menu-navbar">
          <NavLink className="link-navbar" to="/">Home</NavLink>
          <NavLink className="link-navbar" to="/productos">Productos</NavLink>
          <NavLink className="link-navbar" to="/acerca-de">Acerca de </NavLink>
          <NavLink className="link-navbar" to="/contacto">Contacto</NavLink>
          <NavLink className="link-navbar" to="/favoritos">Favoritos</NavLink>
        </div>
        <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faUser} />
        </div>
       
      </nav>

    </div>
  )

}
export default Navbar