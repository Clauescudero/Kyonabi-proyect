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
import Creatividad from "./contenidos-principales/creatividad/Creatividad.jsx"
import Planificacion from "./planificacion/Planificacion"
import Suger from "./sugerencia/sugerencia";
import Footer from "./Footer/Footer";
import Distribuicion from "./contenidos/distri";
import Login from "./Login/Login";
import Docentes from "./docentes/docentes";
import FormularioDocentes from "./FormularioDocentes/FormularioDocentes.jsx";
import FormularioEstudiantes from "./FormularioEstudiante/FormularioEstudiante.jsx";
import NuestrosTutores from "./NuestrosTutores/NuestrosTutores.jsx";
import Herramientas from "./Herramientas/Herramientas.jsx";
import Colaboradores from "./colaboradores/colabora.jsx";
import Ciencias from "./contenidos-principales/ciencia/ciencias.jsx";
import Economia from "./contenidos-principales/economia/economia.jsx";
import Historia from "./contenidos-principales/historia/Historia.jsx";
import Idiomas from "./contenidos-principales/idiomas/idiomas.jsx";
import Matematica from "./contenidos-principales/matematicas/matematicas.jsx";
import Skills from "./contenidos-principales/skills/skills.jsx";
import Tecnologia from "./contenidos-principales/tecnologia/tecnologia.jsx";
import Equipo from './Equipo/Equipo';
import ProfileUser from "./Perfil/ProfileUser.jsx";
import Noticias from "./Noticias/Noticias.jsx"



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
        <Route path='/Calendar/' element={<Calendar />} />
        <Route path='/Docentes' element={<Docentes />} />
        <Route path='/Planificacion' element={<Planificacion />} />
        <Route path='Creatividad' element={<Creatividad />} />
        <Route path='/sugerencia' element={<Suger />} />
        <Route path='/contenidos' element={<Distribuicion />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path="/Formulariodocente" element={<FormularioDocentes />}/>
        <Route path="/FormularioEstudiante" element={<FormularioEstudiantes />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Tutores" element={<NuestrosTutores/>}></Route>
        <Route path="/Herramientas" element={<Herramientas/>}></Route>
        <Route path="/Colaboradores" element={<Colaboradores/>}></Route>
        <Route path="/Ciencia" element={<Ciencias/>}></Route>
        <Route path="/Economia" element={<Economia/>}></Route>
        <Route path="/Historia" element={<Historia/>}></Route>
        <Route path="/Idiomas" element={<Idiomas/>}></Route>
        <Route path="/Matematicas" element={<Matematica/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
        <Route path="/Tecnologia" element={<Tecnologia/>}></Route>
        <Route path="/equipo" element={<Equipo/>}></Route>
        <Route path="/Perfil/:id" element={<ProfileUser />} />
        <Route path="/noticias" element={<Noticias/>}></Route>



      </Routes>
      <MusicPlayer src= {audioSource}></MusicPlayer> 
      <Footer />
    </div>
  
  );
}
export default App;


