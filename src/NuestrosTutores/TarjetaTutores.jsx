import React from 'react';
import './Tutores.css';


const Tarjetatutores = ({ nombre, edad, experiencia, fotoURL }) => {
  return (
    <div className="tutor-card">
      <div className="tutor-photo">
        <img src={fotoURL} alt={`Foto de ${nombre}`} />
      </div>
      <div className="tutor-info">
        <h3>{nombre}</h3>
        <p>Edad: {edad}</p>
        <p>Experiencia: {experiencia}</p>
      </div>
    </div>
  );
};

export default Tarjetatutores;
