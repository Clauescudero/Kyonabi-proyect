import React from 'react';
import './tecnologia.css';

const tecnologia = () => {
  return (
    <div id="tecnologia-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-tecnologia'>
        <h1>Tecnología</h1>
        <p>
        La tecnología es la suma de técnicas, habilidades, métodos y procesos utilizados en la producción de bienes o servicios o en el logro de objetivos, como la investigación científica.
        </p>
      </div>
      <div className="main-content-tecnologia">
        <div className="cards-container-tecnologia">
          {/* Tarjeta 1 */}
          <div className="card-tecnologia">
            <div className="card-content-tecnologia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AXY5dDg4ot8"
                title="video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texttecnologia">
                <h1>La tecnología más destacada del CES 2023</h1>
                <p>Para aquellos que siguen los últimos desarrollos en innovación, los expertos predicen cuáles serán las claves en tecnología.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-tecnologia">
            <div className="card-content-tecnologia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MMAvjs46tnY"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texttecnologia">
                <h1>¿Podrán los seres humanos amar a los robots con IA?</h1>
                <p>La inteligencia artificial crea arte, sabe más que muchas personas y trabaja más rápido que ellas. Pero, ¿aceptará la gente robots controlados por IA?</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-tecnologia">
            <div className="card-content-tecnologia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NGt5T35OyXw"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texttecnologia">
                <h1>MAC PRO vs PC GAMER de la NASA ¿cuál será mejor?</h1>
                <p>Primera vez probando una Apple MAC y es la más cara y poderosa del 2023. se compara con pc Gaming Extrema tope de gama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tecnologia;