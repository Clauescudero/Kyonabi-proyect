import React from 'react';
import './Registro.css';

const Registro = () => {
  return (
    <div className="container-regis">
      <div className="content-container">
        <div className="text-and-images-container">
          <div className="left-container">
            <img src="https://svgsilh.com/svg_v2/309661.svg" alt="Imagen Izquierda" className="left-image" />
          </div>

          <div className="text-container">
            <h1>Registrarse</h1>
            <p>¿Cómo desea registrarse?</p>

            <div className="buttons-container">
              <button className="btn btn-primary me-2" style={{ backgroundColor: 'aliceblue', color:'black',fontSize: 'large',
    fontWeight: 'bold'}}><a href="/Formulario-Estudiantes">Estudiante</a></button>
              <button className="btn btn-primary" style={{ backgroundColor: 'aliceblue', color:'black',fontSize: 'large',
    fontWeight: 'bold'}}><a href="/Formulario-Docentes">Docente</a></button>
            </div>
          </div>

          <div className="right-container">
            <img src="https://cdn-icons-png.flaticon.com/512/65/65882.png" alt="Imagen Derecha" className="right-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
