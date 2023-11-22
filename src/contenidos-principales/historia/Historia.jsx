import React from 'react';
import './Historia.css';

const Historia = () => {
  return (
    <div id="Historia-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-Historia'>
        <h1>Historia</h1>
        <p>
        Disciplina que estudia y expone, de acuerdo con determinados principios y métodos, los acontecimientos y hechos que pertenecen al tiempo pasado y que constituyen el desarrollo de la humanidad desde sus orígenes hasta el momento presente.
        </p>
      </div>
      <div className="main-content-Historia">
        <div className="cards-container-Historia">
          {/* Tarjeta 1 */}
          <div className="card-Historia">
            <div className="card-content-Historia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aS_4ktMWpqk"
                title="¿Qué es la Historia y para qué sirve?"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textHistoria1">
                <h1>¿Qué es la Historia y para qué sirve?</h1>
                <p>La historia es una ciencia que nos permite conocer ese pasado para entender el presente que vivimos y construir nuestro futuro.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-Historia">
            <div className="card-content-Historia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TI9mTWszQMI"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textHistoria1">
                <h1>La Historia del Mundo siglo a siglo | La historia desde el Siglo I al Siglo XX</h1>
                <p>Bienvenidos a la recopilación sobre la historia de la humanidad siglo por siglo</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-Historia">
            <div className="card-content-Historia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lfMCQvI0qpM"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textHistoria1">
                <h1>La Historia de Chile en 16 minutos</h1>
                <p>La historia del país más largo del planeta: un país que ha vivido de todo y que a día de hoy es uno de los más prósperos del Continente Sur: Chile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
