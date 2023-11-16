import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import NavBar from './Reutilizables/NavBar';
import Home from './Principal/Home';
import Calendar from './calendar/Calendar';
import Temas from "./contenidos/tema.jsx";
import './App.css';
import Registro from './Registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Creatividad from "./contenidos-principales/creatividad/Creatividad.jsx";
import Planificacion from "./planificacion/Planificacion"
import Suger from "./sugerencia/sugerencia";
import Footer from "./Footer/Footer";
import Distribuicion from "./contenidos/distri";
import Login from "./Login/Login";
import Docentes from "./docentes/docentes";
import FormularioDocentes from "./FormularioDocentes/FormularioDocentes";
import FormularioEstudiantes from "./FormularioEstudiante/FormularioEstudiante";
import Perfil from "./Perfil/PerfilEstudiante"
import Ciencias from "./contenidos-principales/ciencia/ciencias.jsx";
import Historia from "./contenidos-principales/historia/Historia.jsx";
import Matematica from "./contenidos-principales/matematicas/matematicas.jsx";
import Idiomas from "./contenidos-principales/idiomas/idiomas.jsx";
import Tecnologia from "./contenidos-principales/tecnologia/tecnologia.jsx";
import Skills from "./contenidos-principales/skills/skills.jsx";
import Economia from "./contenidos-principales/economia/economia.jsx";
import Colaboradores from "./colaboradores/colabora.jsx";

function App () {
  const audioSource = 'src/Music';
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <Routes>
      <Route path='/' element={<Home />} />
      /* <Route path='/registro' element={<Registro />} />
      <Route path='/Calendar' element={<Calendar />} />
      <Route path='/Docentes' element={<Docentes />} />
      <Route path='/Docentes/Planificacion' element={<Planificacion />} />
      <Route path='/Creatividad' element={<Creatividad />} />
      <Route path='/sugerencia' element={<Suger />} />
      <Route path='/contenidos' element={<Distribuicion />} />
      <Route path='/Formulario-Docentes' element={<FormularioDocentes />} />
      <Route path='/Formulario-Estudiantes' element={<FormularioEstudiantes />} />
      <Route path='/Perfil' element={<Perfil />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Temas' element={<Temas />} />
      <Route path='/formuralioestudiantil' element={<FormularioEstudiantes />} />
      <Route path="/Formulariodedocente" element={<FormularioDocentes />}/>
      <Route path="/ciencia" element={<Ciencias />}/>
      <Route path="/habilidadesblandas" element={<Skills />}/>
      <Route path="/idiomas" element={<Idiomas/>}/>
      <Route path="/Tecnologia" element={<Tecnologia/>}/>
      <Route path="/Historia" element={<Historia/>}/>
      <Route path="/Economia" element={<Economia/>}/>
      <Route path="/matematica" element={<Matematica/>}/>
      <Route path="/Colaboradores"  element={<Colaboradores />} ></Route> */
      </Routes>
      <Footer />
      <MusicPlayer src= {audioSource}></MusicPlayer> */
    </div>
  
  );
}
export default App;


