import React from 'react';
import './skills.css';

const skills = () => {
  return (
    <div id="skills-container" className="contenidos-materiales">
      {/* ... */}
      <div className='title-skills'>
        <h1>Habilidades Blandas</h1>
        <p>
        Disciplina que estudia y expone, de acuerdo con determinados principios y métodos, los acontecimientos y hechos que pertenecen al tiempo pasado y que constituyen el desarrollo de la humanidad desde sus orígenes hasta el momento presente.
        </p>
      </div>
      <div className="main-content-skills">
        <div className="cards-container-skills">
          {/* Tarjeta 1 */}
          <div className="card-skills">
            <div className="card-content-skills">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iWN-K4rWyrI"
                title="video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textskills">
                <h1>Cómo Mantener la MOTIVACIÓN para Alcanzar tus Metas</h1>
                <p>¿Te sucede que a veces tienes el deseo de hacer algo con tu vida, pero luego empiezas a pensar en todo lo que tienes que hacer para lograrlo y te sientes abrumado por todos estos pensamientos?</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-skills">
            <div className="card-content-skills">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TI9mTWszQMI"
                title="Título del Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textskills">
                <h1>La Historia del Mundo siglo a siglo | La historia desde el Siglo I al Siglo XX</h1>
                <p>Bienvenidos a la recopilación sobre la historia de la humanidad siglo por siglo</p>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-skills">
            <div className="card-content-skills">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W7gmFAdkSRs"
                title="Título del Video 3"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="card-textskills">
                <h1>Cómo Mejorar tu Diálogo Interno | 3 Hábitos Clave</h1>
                <p>En el video de hoy hablaremos sobre nuestro diálogo interno, es decir, el lenguaje de nuestra mente. ¿cómo convertirlo en una fuente de motivación?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
