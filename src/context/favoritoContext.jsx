import { useContext } from "react";
import { useState, createContext } from "react";

export const FavoritosContext = createContext();

export const useFavoritosContext = () => useContext(FavoritosContext);

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
  
    const addFavoritos = (imagen) => {
      setFavoritos([...favoritos, imagen]);
    };
  
    return (
      <FavoritosContext.Provider value={{ favoritos, addFavoritos }}>
        {children}
      </FavoritosContext.Provider>
    );
  }