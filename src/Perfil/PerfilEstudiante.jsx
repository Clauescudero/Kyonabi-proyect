import React from 'react';
import './PerfilEstudiante.css';

const Perfil = () => {
  return (
    <div className="user-profile-container">
      <header className="user-info">
      <div >
        <h1>Nombre de Usuario: </h1>
        <p>Edad: 20</p>
        <p>Email: usuario@example.com</p>
        <button><a href="/Calendar">Calendario en Pixeles</a></button>
      </div>
      </header>
      <div className="user-avatar">
        <img src="https://via.placeholder.com/150" alt="User Avatar" className="avatar-image"/>
      </div>
    </div>
  );
};


export default Perfil;