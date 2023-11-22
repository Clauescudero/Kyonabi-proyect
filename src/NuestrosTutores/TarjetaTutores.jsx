// En tu componente Tarjetatutores.js
import React from 'react';

const Tarjetatutores = ({ name, age, email, rol, subjects, description }) => {
  return (
    <div className="tarjeta-tutor">
      <h3>{name}</h3>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
      <p>Rol: {rol}</p>
      <p>Materias: {subjects.join(', ')}</p>
      <p>Descripción: {description}</p>
    </div>
  );
};

export default Tarjetatutores;
