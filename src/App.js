import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import ContactoPage from './pages/ContactoPage';
import ProyectoPage from './pages/ProyectoPage';
import ServiciosPage from './pages/ServiciosPage';
import BlogPage from './pages/BlogPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
 

function App() {return (
<div className='App'>
  <Header/>
  <BrowserRouter>
  <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/proyectos" element={<ProyectoPage/>} />
        <Route path="/Contacto" element= {<ContactoPage/>} />
        <Route path="/servicios" element= {<ServiciosPage/>} />
        <Route path="/Blog" element= {<BlogPage/>} />
        </Routes>
        </BrowserRouter>
        <Footer/>
        </div>
        
  );
}


export default App;

