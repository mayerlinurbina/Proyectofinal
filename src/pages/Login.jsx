import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
const App = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useUserContext()
  const navigate = useNavigate();

  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(correo, password);
    const respuesta = login(correo, password);

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
      <h1 className="text-center py-4">Iniciar Sesión</h1>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px', textAlign: 'left' }}>
        <p style={{ color: 'red' }}>{mensajeError}</p>
        <div className="form-outline mb-4">
          <label className="mb-2" for="form2Example1">Correo Electrónico</label>
          <input
            id="form2Example1"
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
          <label className="mb-2" for="form2Example2">Contraseña</label>
          <input
            id="form2Example2"
            className="form-control"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setMensajeError("");
              setPassword(e.target.value)
            }}
          />
        </div>

        <button style={{ backgroundColor: 'hotpink', color: 'white' }} type="submit" className="btn btn-block mb-4">Iniciar Sesión</button>

        <div className="text-center">
          <p>¿No tienes una cuenta? <Link style={{ color: 'hotpink' }} to="/register">Registrate</Link></p>
        </div>
      </form>
    </>
  );
};
export default App;