import React from 'react';
import './idiomas.css';

const idiomas = () => {
  return (
    <div id="idiomas-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-idiomas'>
        <h1>Idiomas</h1>
        <p>
        Un idioma o lengua es un sistema de comunicación verbal o gestual, propia de una sociedad humana. Cada idioma se subdivide en dialectos, pero actualmente se duda que exista un criterio válido para hacer tal división de una manera objetiva y segura.
        </p>
      </div>
      <div className="main-content-idiomas">
        <div className="cards-container-idiomas">
          {/* Tarjeta 1 */}
          <div className="card-idiomas">
            <div className="card-content-idiomas">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nhzjGKXY5QA"
                title="video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textidiomas">
                <h1>Clase de Inglés para Principiantes</h1>
                <p>En este curso de inglés para principiantes aprenderás toda la gramática y el vocabulario necesario para poder formar frases básicas y esenciales en inglés </p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-idiomas">
            <div className="card-content-idiomas">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ibiIjbpTn5Y"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textidiomas">
                <h1>Frases y expresiones que debes aprender antes de tu primera clase de Japones</h1>
                <p>Aprende las 55 frases y expresiones que debes conocer antes de tu primera clase de Japonés</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-Historia">
            <div className="card-content-idiomas">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aotby66-w0g"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textidiomas">
                <h1>Aprende el ABC Coreano</h1>
                <p>El rey Sojeon dijo que el abecedario corano se puede aprender en una semana ¿podrás?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default idiomas;
