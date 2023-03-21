


const Contacto = () => {
    return (
        <div className="form-container">
            <h1 className="title-form">Cuentanos ¿en que te podemos ayudar?</h1>
            <form>
                <div className="form-group">

                    <label></label>
                    <input className="input-form" type="text" placeholder="nombre" />
                </div>
                <div className="form-group">

                    <label></label>
                    <input className="input-form" type="text" placeholder="correo" />
                </div>
                <div className="form-group">

                    <label></label>
                    <input className="input-form" type="text" placeholder="asunto" />
                </div>
                <div className="form-group">

                    <label></label>
                    <input className="input-form" type="text" placeholder="mensaje" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto