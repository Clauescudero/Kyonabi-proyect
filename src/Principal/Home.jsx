import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='Card-container'>
      <div className="card bg">
        <img src="https://media.discordapp.net/attachments/1143374824299827302/1171586313850470410/Banner1.png?ex=655d37c8&is=654ac2c8&hm=fb4c93f98c5f521ea7986093d91881ca02450abb443aa72f9df132fc9a195740&=" className="card-img-banner" alt="Stony Beach" />
        <div className="card-img-overlay">
          <h5 className="card-title-banner">¿Qué es Kyōnabi?</h5>
          <p className="card-text">
            Somos una comunidad de apoyo educativo en línea, reconocida por crear un ambiente idóneo para el intercambio de conocimientos, aprendizaje y desarrollo personal, buscando inspirar la creatividad y la autodeterminación con el fin de crear un mundo donde todas las niñas, niños y adolescentes tengan oportunidades de aprender.
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://media.discordapp.net/attachments/1143374824299827302/1171586337757999104/card1.png?ex=6566724d&is=6553fd4d&hm=e4655dcbafbb0dde09068dc45c4ec131f3bb19dfb5582964d21edc5bb9958855&=&width=380&height=676" className="img-fluid rounded-start" alt="Card 1" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title3">Misión</h5>
              <p className="card-text3">
                Nuestra misión es impulsar una educación de calidad para los estudiantes que no pueden asistir presencialmente a clases. Que puedan aprender colaborativamente con otros estudiantes y docentes, fomentando así la diversidad de conocimiento y el acceso a recursos educativos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://media.discordapp.net/attachments/1143374824299827302/1171586350055706655/Card2.png?ex=65667250&is=6553fd50&hm=0ef483b147514eb94dbdcc619deb786b065173b5f23bfda3d593658a24e1a153&=&width=380&height=676" className="img-fluid rounded-start" alt="Card 2" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title4">Objetivo</h5>
              <p className="card-text4">
                Que las niñas, niños y adolescentes continúen sus estudios a pesar de la deserción, que puedan tener el apoyo educativo y emocional necesario a través de nuestra plataforma web que no solo entregará contenido de estudio sino que también contará con voluntarios para dar clases y tutorías en línea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;







