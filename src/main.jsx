import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FavoritosProvider from './context/favoritoContext'
import CarritoProvider from './context/carritoContext'
import UserProvider from './context/userContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>

  <CarritoProvider>
    <FavoritosProvider>      
      <App />    
    </FavoritosProvider>
  </CarritoProvider>
  </UserProvider>
)