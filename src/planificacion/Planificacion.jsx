import React from 'react';
import './Planificacion.css';

const Plani = () => {
  return (
    <div id="Creatividad-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-Creatividad'>
        <h1>Planificación</h1>
        <p>
        La planificación es el proceso de estructurar una serie de acciones que se llevan a cabo para cumplir determinados objetivos. Definiendo los procedimientos y estrategias a seguir para alcanzar ciertas metas, ¡Queremos que puedas planificar de forma entretenidad para innovar en tus clases!
        </p>
      </div>
      <div className="main-content-Creatividad">
        <div className="cards-container-Creatividad">
          {/* Tarjeta 1 */}
          <div className="card-Creatividad">
            <div className="card-content-Creatividad">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hGl7ShlXMd0"
                title="video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textCreatividad">
                <h1>Cortometraje, Gana siempre la creatividad</h1>
                <p>Tú tambien puedes encontrar la creatividad que llevas dentro.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-Creatividad">
            <div className="card-content-Creatividad">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jxuTvmOHg54"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textCreatividad">
                <h1>Cómo Acceder a tu CREATIVIDAD</h1>
                <p>En este video aprenderás tres hábitos que te ayudarán a producir trabajos increíbles y originales de los que te sientas orgulloso.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-Creatividad">
            <div className="card-content-Creatividad">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Magubkj8yfU"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textCreatividad">
                <h1>Mapas conceptuales│Tarjetas Pop-Up</h1>
                <p>Crea tus mapas conceptuales de una forma nueva y creativa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plani;