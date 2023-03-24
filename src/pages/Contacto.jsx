


const Contacto = () => {
    return (
        <div className="form-container">
            <h1 className="title-form text-center py-4">Cuentanos ¿en que te podemos ayudar?</h1>
            {/* <form>
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
            </form> */}
            <form className="mx-auto" style={{ maxWidth: '600px', textAlign: 'left' }}>
      <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example1">Nombre</label>
          <input
          id="form2Example1"
          className="form-control"
          type="text"
          placeholder="Nombre"
         
        />
      </div>


        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example2">Correo Electrónico</label>
          <input
            id="form2Example2"
            className="form-control"
            type="email"
            placeholder="Correo Electronico"          
          />
        </div>

        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example3">Asunto</label>
          <input
            id="form2Example3"
            className="form-control"
            type="password"
            placeholder="Asunto"           
          />
        </div>

        <div className="form-group mb-4">
            <label className="mb-2" for="form2Example5">Mensaje</label>
            <textarea 
                id="form2Example5"
                className="form-control"
                type="text"
                placeholder="Escribenos un mensaje..."    
                rows="3"
                style={{ resize: 'none' }}
            >
            </textarea>
        </div>

        <button style={{ backgroundColor: 'hotpink', color: 'white' }} type="submit" className="btn btn-block mb-4">Enviar</button>

       
      </form>
        </div>
    )
}
export default Contacto