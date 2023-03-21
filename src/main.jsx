import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FavoritosProvider from './context/favoritoContext'
import CarritoProvider from './context/carritoContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CarritoProvider>
    <FavoritosProvider>      
      <App />    
    </FavoritosProvider>
  </CarritoProvider>
)