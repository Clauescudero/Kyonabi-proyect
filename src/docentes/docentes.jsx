import React from 'react';
import { Link } from 'react-router-dom';

const Docentes = () => {
    return (
        <div className='Docentes'>
            <h1>Bienvenido al apartado de docentes</h1>
            <h2>Selecciona una opción</h2>
            <Link to="/Docentes/Planificacion ">
            <button>Planificación</button>
            </Link>
            <Link to="/Formulariodedocente">
            <button>¡Se un tutor voluntario!</button>
            </Link>
        </div>
    );
};

export default Docentes;