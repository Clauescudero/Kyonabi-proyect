import React from 'react';
import Tarjetatutores from './TarjetaTutores';
import './Tutores.css';

const NuestrosTutores = () => {
  
  const tutores = [
    {
      nombre: 'Priscila Carrasco',
      edad: 35,
      experiencia: 'Ciencia, 10 años',
      fotoURL: 'src/assets/Tutor-ciencia.png',
    },
    {
        nombre: 'Diana Rodríguez ',
        edad: 38,
        experiencia: 'Creatividad, 15 años',
        fotoURL: 'src/assets/Tutor-creatividad.png',
      },
      {
        nombre: 'Javier Rocha ',
        edad: 40,
        experiencia: 'Economía, 20 años',
        fotoURL: 'src/assets/Tutor-economia.png',
      },
      {
        nombre: 'Ignacia Vergara',
        edad: 27,
        experiencia: 'Habilidades blandas, 8 años',
        fotoURL: 'src/assets/Tutor-habilidades.png',
      },
      {
        nombre: 'Ana Lindao',
        edad: 30,
        experiencia: 'Historia, 7 años',
        fotoURL: 'src/assets/Tutor-historia.png',
      },


      {
        nombre: 'Cristina Smith',
        edad: 25,
        experiencia: 'Idiomas, 5 años',
        fotoURL: 'src/assets/Tutor-idiomas.png',
      },

      {
        nombre: 'Jose García',
        edad: 38,
        experiencia: 'Matemática, 15 años',
        fotoURL: 'src/assets/Tutor-matematica.png',
      },

      {
        nombre: 'Emilia Bustamante',
        edad: 28,
        experiencia: 'Recursos, 6 años',
        fotoURL: 'src/assets/Tutor-recursos.png',
      },

      {
        nombre: 'Linda Brown',
        edad: 30,
        experiencia: 'Tecnología, 8 años',
        fotoURL: 'src/assets/tutor-tecnologia.png',
      },


  ];

  return (
    
    <div className="nuestros-tutores">
      {tutores.map((tutor, index) => (
        <Tarjetatutores key={index} {...tutor} />
      ))}
    </div>
  );
};

export default NuestrosTutores;
