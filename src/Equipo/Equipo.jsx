import React from 'react';
import "./Equipo.css";

// Componente de tarjeta (Card)
const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="cardEquipo">
      <img src={imageUrl} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>        
      </div>
    </div>
  );
};

// Componente principal que utiliza la tarjeta (App)
const Equipo = () => {
                  
  return (
    <div id="tituloPrincipal-container"  className="apptituloPricipal">   
    <div className="tituloPrincipal">
        <h1>Conoce a Nuestro Equipo</h1>
        <p>El equipo técnico de Kyonabi, se encarga de mantener la pagina activa y actualizada para siempre entregar el mejor sevicio a nuestros usuarios</p>
      </div>   
      
      <div id="tituloPrincipal-card"  className="appcard">  
      <Card
        title="Nicole Rodríguez  Scrum Master"
        content="Lider de Equipo Scrum Kyonabi, encargada de organizar y mantener el enfoque del proyecto. "
        imageUrl="src/assets/Nicole.png"
      />
      <Card
        title="Claudio Escudero  Product Owner"
        content="Responsable de realizar los nexos entre Kyonabi y las partes interesadas en el proyecto."
        imageUrl="src/assets/Claudio.png"
      />
      <Card
        title="Fernando Lizana  Desarrollador"
        content="Desarrollador Full Stack con enofque en..."
        imageUrl="src/assets/Fernando.png"
      />
      <Card
        title="Rolgens Gerve  Desarrollador "
        content="Desarrollador Full Stack con enofque en..."
        imageUrl="src/assets/Olguin.png"
      />
      <Card
        title="Mixy Becerra  Desarrolladora"
        content="Desarrollador Full Stack con enofque en Diseño y Gráficas"
        imageUrl="src/assets/Mixy.png"
      />
      
    </div>
    </div>
  );
};

export default Equipo;

