import React from 'react';
import './Creatividad.css';

const Creatividad = () => {
    return (
        <div id="creatividad-container" className="contenidos-materiales">
          <div className='title-creatividad'>
            <h1>Creatividad</h1>
              <p>
                  El pensamiento creativo está muy valorado en nuestras sociedades, en las que la innovación y el cambio juegan un rol importante.
                  <br/> En él intervienen la memoria, la inteligencia, la imaginación y otros procesos mentales complejos que conducen al pensamiento original.
              </p>
          </div>
          <div className="main-content">
            <div className="cards-container">
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 1</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 2</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                  />
                  <div className="card-text">
                    <h1>video 3</h1>
                    <p>Texto descriptivo del video, imagen o enlace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      );
    };

export default Creatividad;
