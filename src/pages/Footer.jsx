const Footer = () => {
    return (
        <div>
            <div className="container-footer">
                <div>

                    <h1>INFORMACION</h1>
                    <ul className="list-footer">
                        <li>Terminos y condiciones</li>
                        <li>Metodos de pago</li>
                        <li>Garantia del producto</li>
                        <li>Devoluciones</li>
                        <li>Seguridad de pago</li>
                    </ul>
                </div>
                <div>
                    <h1>CONTACTENOS</h1>
                    <ul>
                        <li>Gregorio Marañon #2415</li>
                        <li>Nexuby@gmail.com</li>
                        <li>+56911223344</li>
                    </ul>
                </div>
                <div>
                    <div className="input-group mb-3 w-30">
                        <input type="text" className="form-control" placeholder="correo@gmail.com" aria-label="" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Suscribirse</button>
                    </div>
                    <h1>RECIBE TODAS LAS OFERTAS PARA TI Y TU BEBE</h1>
                    <a href="">Facebook</a>
                    <a href="">Whatsapp</a>
                    <a href="">Instagram</a>
                    <a href="">Tiktok</a>
                </div>
            </div>

        </div>

    )
}
export default Footer