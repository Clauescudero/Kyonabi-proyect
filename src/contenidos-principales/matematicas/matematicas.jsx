
import React from 'react';
import './matematica.css';

const matematica = () => {
  return (
    <div id="matematica-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-matematica'>
        <h1>Matemática</h1>
        <p>
        La matemática ​​​ son una ciencia formal que surgió del estudio de las figuras geométricas y la aritmética con números. Hoy en día se suele aceptar que la matemática es una ciencia que investiga patrones.
        </p>
      </div>
      <div className="main-content-matematica">
        <div className="cards-container-matematica">
          {/* Tarjeta 1 */}
          <div className="card-matematica">
            <div className="card-content-matematica">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLiG_ZAUipsjtOJlFypHcqrKywhN_CEOLX"
                title="MATEMÁTICA | Números Racionales"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textmatematica">
                <h1>MATEMÁTICA | Números Racionales</h1>
                <p>Aprende los Números Racionales con la clase del profesor Nicolás González</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-matematica">
            <div className="card-content-matematica">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Cdti7efBqVc?si=qZq4ZG5_FU7TI-TQ"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textmatematica">
                <h1>MATEMÁTICA | Definición de una potencia</h1>
                <p>Aprende Definición de Potencias y sus propiedades con la clase del profesor Nicolás González</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-matematica">
            <div className="card-content-Historia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vD0F3x7QR9U?si=zVz257i3w3or7Kp2"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textmatematica">
                <h1>MATEMÁTICA | Productos Notables</h1>
                <p>Aprende Productos Notables con la clase del profesor Nicolás González</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default matematica;
