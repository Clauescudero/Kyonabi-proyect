import React from 'react';
import './economia.css';

const economia = () => {
  return (
    <div id="economia-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-economia'>
        <h1>Economía Personal</h1>
        <p>
        Las finanzas personales se refieren al manejo y administración de dinero y bienes de un individuo o familia. Es decir, la administración de todo tu dinero: tus ingresos, tus gastos, bienes materiales, fondos de ahorro, fondos de inversión, seguros, créditos, etc.
        </p>
      </div>
      <div className="main-content-economia">
        <div className="cards-container-economia">
          {/* Tarjeta 1 */}
          <div className="card-economia">
            <div className="card-content-economia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dUiZ5is-Chw"
                title="Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texteconomia">
                <h1>La Manera Más Fácil para Entender las Finanzas</h1>
                <p>Esta es probablemente la manera más fácil para entender cómo funcionan las finanzas personales. Lo hemos explicado con gallinas y huevos.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-economia">
            <div className="card-content-economia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ITpM5jVrrkI"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texteconomia">
                <h1>Organiza tus finanzas</h1>
                <p>Aprende a tener un control de gastos y cómo mejorar las finanzas personales implementando el sistema de sobres.</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-economia">
            <div className="card-content-economia">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/y4vIMQ6ddso"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-texteconomia">
                <h1>7 hábitos que las personas Ahorrativas hacen a diario</h1>
                <p>Los que tienen estos 7 hábitos, ahorran mucho dinero. Les compartimos algunas cosas que hacen las personas altamente ahorrativas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default economia;
