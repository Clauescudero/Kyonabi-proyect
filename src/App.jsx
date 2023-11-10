import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import NavBar from './Reutilizables/NavBar';
import Home from './Principal/Home';
import Calendar from './calendar/Calendar';
import DayCell from './calendar/DayCell'; 
import './App.css';
import Registro from './Registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Creatividad from "./creatividad/Creatividad";
import Planificacion from "./planificacion/Planificacion"
import MusicPlayer from "./Reproductor/Reproductor"
import Suger from "./sugerencia/sugerencia";
import Footer from "./Footer/Footer";
import Distribuicion from "./contenidos/distri";
import Formulario from "./Formulario/Formulario";
import Docentes from "./docentes/docentes";

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/Calendar' element={<Calendar />} />
        <Route path='/Docentes' element={<Docentes />} />
        <Route path='/Docentes/Planificacion' element={<Planificacion />} />
        <Route path='Creatividad' element={<Creatividad />} />
        <Route path='/sugerencia' element={<Suger />} />
        <Route path='/contenidos' element={<Distribuicion />} />
        <Route path='/Formulario' element={<Formulario />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
