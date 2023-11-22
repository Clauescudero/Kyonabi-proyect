import React from 'react';
import './matematicas.css';

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
                src="https://www.youtube.com/embed/B_9DkUFgLE0&list=PLiG_ZAUipsjtOJlFypHcqrKywhN_CEOLX"
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
                src="https://www.youtube.com/embed/Cdti7efBqVc&list=PLiG_ZAUipsjtOJlFypHcqrKywhN_CEOLX&index=4"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textmatematica">
                <h1>MATEMÁTICA | Definición de una potencia y sus propiedades</h1>
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
                src="https://www.youtube.com/embed/vD0F3x7QR9U&list=PLiG_ZAUipsjtOJlFypHcqrKywhN_CEOLX&index=6"
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
