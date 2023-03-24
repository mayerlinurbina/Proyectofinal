import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
const Registro = () => {
    const { register, user } = useUserContext()
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmacionPassword, setConfirmacionPassword] = useState("");

  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(correo, password);
    
    const respuesta = register(nombre, correo, password, confirmacionPassword);

    if (respuesta.estado === 'failed') {
      setMensajeError(respuesta.mensaje);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user])

  return (
    <>
      <h1 className="text-center py-4">Registro</h1>

    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px', textAlign: 'left' }}>
      <p style={{ color: 'red' }}>{mensajeError}</p>
      <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example1">Nombre</label>
          <input
          id="form2Example1"
          className="form-control"
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setMensajeError("");
            setNombre(e.target.value)
          }}
        />
      </div>


        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example2">Correo Electrónico</label>
          <input
            id="form2Example2"
            className="form-control"
            type="email"
            placeholder="Correo Electronico"
            onChange={(e) => {
              setMensajeError("");
              setCorreo(e.target.value)
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example3">Contraseña</label>
          <input
            id="form2Example3"
            className="form-control"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setMensajeError("");
              setPassword(e.target.value)
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example4">Confirmar contraseña</label>
          <input
            id="form2Example4"
            className="form-control"
            type="password"
            placeholder="Confirmar contraseña"
            onChange={(e) => {
              setMensajeError("");
              setConfirmacionPassword(e.target.value)
            }}
          />
        </div>

        <button style={{ backgroundColor: 'hotpink', color: 'white' }} type="submit" className="btn btn-block mb-4">Registrarse</button>

        <div className="text-center">
          <p>¿Ya tienes una cuenta? Inicia sesión <Link style={{ color: 'hotpink' }} to="/login">aquí</Link></p>
        </div>
      </form>
    </>
  );
};
export default Registro;