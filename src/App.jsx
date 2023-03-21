import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Contacto from './pages/contacto';
import Navbar from './components/Navbar'
import Footer from './pages/footer';
import Inicio from './pages/inicio-sesion'
import Bebe from './pages/Bebe';
import Mama from './pages/Mama';
import Favoritos from './pages/Favoritos';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes> 

            <Route path="/" element={<Home/>} />
            <Route path="/categoria/bebe" element={<Bebe/>} />
            <Route path="/categoria/mama" element={<Mama/>} />
            <Route path="/favoritos" element={<Favoritos/>} />            
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;