import { faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Conectate a nuestras redes sociales:</span>
                </div>

                <div>
                    <a className="me-4 text-reset" target="_blank" href="https://web.facebook.com/profile.php?id=100070110212853"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="me-4 text-reset" target="_blank" href="https://www.instagram.com/nexuby/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 footer-text">
                                <i className="fas fa-gem me-3"></i>Nexuby
                            </h6>
                            <p className="footer-text">
                                El milagro de un nacimiento es un tesoro único e irrepetible para una mujer.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 footer-text">
                                Categorias
                            </h6>
                            <p className="footer-text">
                                <Link to="/categoria/mama" className="text-reset">Mamá</Link>
                            </p>
                            <p className="footer-text">
                                <Link to="/categoria/bebe" className="text-reset">Bebe</Link>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 footer-text">
                                Links
                            </h6>
                            <p className="footer-text">
                                <NavLink className="nav-link link-navbar" to="/">Home</NavLink>
                            </p>
                            <p className="footer-text">
                                <NavLink className="nav-link link-navbar" to="/productos">Productos</NavLink>
                            </p>
                            <p className="footer-text">
                                <NavLink className="nav-link link-navbar" to="/nosotros">Nosotros</NavLink>
                            </p>
                            <p className="footer-text">
                                <NavLink className="nav-link link-navbar" to="/contacto">Contacto</NavLink>
                            </p>
                            <p className="footer-text">
                                <NavLink className="nav-link link-navbar" to="/favoritos">Favoritos</NavLink>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 footer-text">Contacto</h6>
                            {/* <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p> */}
                            <p className="footer-text">
                                <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faEnvelope} />
                                nexuby@gmail.com
                            </p>
                            <p className="footer-text"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPhone} /> +56 9 1122 3344</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                Nexuby
            </div>
        </footer>

    )
}
export default Footer