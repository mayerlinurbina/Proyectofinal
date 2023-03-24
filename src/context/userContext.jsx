import { useContext, useEffect } from "react";
import { useState, createContext } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const res = await fetch("/data/users.json");
        const data = await res.json();
        setUsers(data)
      };
    
      useEffect(() => {
        getData();
      }, []);
  
    const login = (correo, password) => {
        const user = users.find(user => user.email === correo);
        if (user) {
            if (user.password !== password) {
              return {
                estado: 'failed',
                mensaje: 'Contraseña incorrecta'
              }
            }

            setUser(user);
            return {
              estado: 'success',
              mensaje: 'Se ha iniciado sesión correctamente'
            }
        } else {
          return {
            estado: 'failed',
            mensaje: 'Usuario con este correo no existe'
          }
        }
    }

    const register = (nombre, correo, password, confirmacionPassword) => {
      if (password !== confirmacionPassword) {
        return {
          estado: 'failed',
          mensaje: 'Las contraseñas no coinciden'
        }
      }


      const usuarioYaExiste = users.filter(user => user.email === correo).length > 0;

      if (usuarioYaExiste) {
        return {
          estado: 'failed',
          mensaje: 'Ya existe un usuario con este correo'
        }
      }

      const ultimoUsuario = users[users.length - 1];

      const nuevoUsuario = {
        "id": ultimoUsuario ? ultimoUsuario.id + 1 : 1,
        "name": nombre,
        "email": correo,
        "password": password,
      }

      setUsers([...users, nuevoUsuario])
      setUser(nuevoUsuario);

      return {
        estado: 'success',
        mensaje: 'Te has registrado exitosamente'
      }
    }

    const logout = () => {
      setUser(null);
    }

    const edit = (id, nombre, correo, password) => {
      const user = {
        id: id,
        name: nombre,
        email: correo,
        password: password
      }

      const usersFiltrados = users.filter(user => user.id !== id);

      setUser(user)
      setUsers([...usersFiltrados, user]);
    }
  
    return (
      <UserContext.Provider value={{ user, login, logout, register, edit }}>
        {children}
      </UserContext.Provider>
    );
  }