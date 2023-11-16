import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import NavBar from './Reutilizables/NavBar';
import Home from './Principal/Home';
import Calendar from './calendar/Calendar';
import './App.css';
import Registro from './Registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Creatividad from "./contenidos-principales/creatividad/Creatividad.jsx";
import Planificacion from "./planificacion/Planificacion"
import Suger from "./sugerencia/sugerencia";
import Footer from "./Footer/Footer";
import Distribuicion from "./contenidos/distri";
import Login from "./Login/Login";
import Docentes from "./docentes/docentes";
import FormularioDocentes from "./FormularioDocentes/FormularioDocentes.jsx";
import FormularioEstudiantes from "./FormularioEstudiante/FormularioEstudiante.jsx";
import NuestrosTutores from "./NuestrosTutores/NuestrosTutores.jsx";

function App () {
  const audioSource = 'src/Music';
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
        {/* <Route path='Creatividad' element={<Creatividad />} /> */}
        <Route path='/sugerencia' element={<Suger />} />
        <Route path='/contenidos' element={<Distribuicion />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path="/Formulariodocente" element={<FormularioDocentes />}/>
        <Route path="/FormularioEstudiante" element={<FormularioEstudiantes />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Tutores" element={<NuestrosTutores/>}></Route>
      </Routes>
      <Footer />
      <MusicPlayer src= {audioSource}></MusicPlayer> */
    </div>
  
  );
}
export default App;


