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
const App = () => {
                  
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
        imageUrl="src/Imagenes Equipo/2.png"
      />
      <Card
        title="Claudio Escudero  Product Owner"
        content="Responsable de realizar los nexos entre Kyonabi y las partes interesadas en el proyecto."
        imageUrl="src/Imagenes Equipo/3.png"
      />
      <Card
        title="Fernando Lizana  Desarrollador"
        content="Desarrollador Full Stack con enofque en..."
        imageUrl="src/Imagenes Equipo/4.png"
      />
      <Card
        title="Rolgens Gerve  Desarrollador "
        content="Desarrollador Full Stack con enofque en..."
        imageUrl="src/Imagenes Equipo/5.png"
      />
      <Card
        title="Mixy Becerra  Desarrolladora"
        content="Desarrollador Full Stack con enofque en Diseño y Gráficas"
        imageUrl="src/Imagenes Equipo/6.png"
      />
      
    </div>
    </div>
  );
};

export default App;

