import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext"

const Perfil = () => {
    const { user, edit } = useUserContext();

    const [nombre, setNombre] = useState(user?.name);
    const [correo, setCorreo] = useState(user?.email);
    const [password, setPassword] = useState(user?.password);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(correo, password);
        edit(user.id, nombre, correo, password);
    };

    return (
        <div>
            {user && (
                <>
                    {/* <h1>{user.name}</h1>
                    <h3>{user.email}</h3>

                    <form onSubmit={handleSubmit}>
                        <input value={nombre} type="text" onChange={(e) => setNombre(e.target.value)} />
                        <input value={correo} type="email" onChange={(e) => setCorreo(e.target.value)} />
                        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Actualizar</button>
                    </form> */}

                    <h1 className="fs-2 text-center py-4">Perfil</h1>

                    <div className="d-flex justify-content-center" style={{ gap: '30px' }}>
                        <div>
                            <img style={{ width: '300px', height: '300px', borderRadius: '100%', objectFit: 'cover' }} src="/assets/user-placeholder.png" alt=""/>
                        </div>
                        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', textAlign: 'left', width: '100%' }}>
                            <div className="form-outline mb-4">
                                <label className="mb-2" for="form2Example1">Nombre</label>
                                <input
                                    value={nombre}
                                    id="form2Example1"
                                    className="form-control"
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={(e) => {
                                        setNombre(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="mb-2" for="form2Example1">Correo Electrónico</label>
                                <input
                                    value={correo}
                                    id="form2Example1"
                                    className="form-control"
                                    type="email"
                                    placeholder="Correo Electronico"
                                    onChange={(e) => {
                                        setCorreo(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="mb-2" for="form2Example2">Contraseña</label>
                                <input
                                    value={password}
                                    id="form2Example2"
                                    className="form-control"
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>

                            <button style={{ backgroundColor: 'hotpink', color: 'white' }} type="submit" className="btn btn-block mb-4">Actualizar</button>
                        </form>
                    </div>

                </>
            )}
        </div>
    )
}

export default Perfil
