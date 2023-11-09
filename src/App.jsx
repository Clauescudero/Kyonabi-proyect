import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Reutilizables/NavBar';
import Home from './Principal/Home';
import Calendar from './calendar/Calendar';
import DayCell from './calendar/DayCell'; 
import './App.css';
import './App.css';
import Registro from './Registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
      </Routes>
    </div>
  );
}

export default App;
