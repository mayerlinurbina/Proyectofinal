import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import { useUserContext } from "../context/userContext"

const Navbar = () => {

  const { user, logout } = useUserContext()

  return (
    
    <div>

      {/* <nav className="custom-navbar">
        <div>
          <Link to="/">
            <img className='Logo' src="/assets/logo.jpg" alt="" />
          </Link>

        </div>
        <div className="menu-navbar">
          <NavLink className="link-navbar" to="/">Home</NavLink>
          <NavLink className="link-navbar" to="/productos">Productos</NavLink>
          <NavLink className="link-navbar" to="/nosotros">Nosotros</NavLink>
          <NavLink className="link-navbar" to="/contacto">Contacto</NavLink>
          <NavLink className="link-navbar" to="/favoritos">Favoritos</NavLink>
          {user ? (
            <>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
              <>
                <NavLink className="link-navbar btn btn-outline-secondary" to="/login">Iniciar sesión</NavLink>
                <NavLink className="link-navbar btn btn-outline-secondary" to="/register">Registrarse</NavLink>
              </>
            )}
        </div>
        <div className="icon-navbar">
          {user && (
            <Link to="/perfil">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

      </nav> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
  <Link className="navbar-brand" to="/">
    <img className='logo' src="/assets/logo.png" alt="" />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item">
        <NavLink className="nav-link link-navbar" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link link-navbar" to="/productos">Productos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link link-navbar" to="/nosotros">Nosotros</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link link-navbar" to="/contacto">Contacto</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link link-navbar" to="/favoritos">Favoritos</NavLink>
      </li>
    </ul>
    <div className="d-flex align-items-center" style={{ gap: '20px' }}>
      <div>
        {user ? (
          <>
            <button className="link-navbar btn btn-outline-secondary" onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <div className="d-flex align-items-center" style={{ gap: '10px' }}>
            <NavLink className="link-navbar btn btn-outline-secondary" to="/login">Iniciar sesión</NavLink>
            <NavLink className="link-navbar btn btn-outline-secondary" to="/register">Registrarse</NavLink>
          </div>
        )}
      </div>

      <div className="icon-navbar d-flex align-items-center" style={{ gap: '15px' }}>
        {user && (
          <Link to="/perfil">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        <Link to="/carrito">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )

}
export default Navbar