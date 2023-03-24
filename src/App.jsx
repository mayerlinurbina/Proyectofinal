import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contacto from './pages/contacto';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Login from './pages/Login'
import Categoria from './pages/Categoria';
import Favoritos from './pages/Favoritos';
import Products from './pages/Products';
import Perfil from './pages/Perfil';
import ProductDetail from './pages/ProductDetail';
import Registro from './pages/Registro';
import Nosotros from './pages/Nosotros';
import Cart from './pages/Cart';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes> 

            <Route path="/" element={<Home/>} />
            <Route path="/carrito" element={<Cart/>} />
            <Route path="/favoritos" element={<Favoritos/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/register" element={<Registro/>} /> 
            <Route path="/productos" element={<Products/>} /> 
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/categoria/:nombreCategoria" element={<Categoria/>} />  
            <Route path="/perfil" element={<Perfil/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/productos/:productoId" element={<ProductDetail/>} />

            <Route path="*" element={<h1 className="text-center py-4">No encontrado</h1>} />         
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;