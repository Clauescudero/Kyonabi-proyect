import React, { useState, useEffect } from 'react';
import Tarjetatutores from './TarjetaTutores';
import './Tutores.css';
import axios from 'axios';

const NuestrosTutores = () => {
  const [tutores, setTutores] = useState([]);
  const [filtroMateria, setFiltroMateria] = useState('');

  const fetchTutores = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/tutores');
      setTutores(response.data.data);
    } catch (error) {
      console.error('Error al obtener tutores:', error);
    }
  };

  useEffect(() => {
    fetchTutores();
  }, []);

  const filtrarPorMateria = (materia) => {
    setFiltroMateria(materia);
  };

  const tutoresFiltrados = filtroMateria
    ? tutores.filter((tutor) => tutor.subjects.includes(filtroMateria))
    : tutores;

  return (
    <div className="nuestros-tutores">
      <div>
        <label htmlFor="filtroMateria">Filtrar por Materia:</label>
        <select
          id="filtroMateria"
          onChange={(e) => filtrarPorMateria(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Idiomas">Idiomas</option>
          <option value="Historia">Historia</option>
          <option value="Recursos">Recursos</option>
          <option value="Economía">Economía</option>
          <option value="habilidades">Habilidades</option>
          <option value="Creatividad">Creatividad</option>
          <option value="Otras">Otras</option>
        </select>
      </div>

      {tutoresFiltrados.map((tutor, index) => (
        <Tarjetatutores key={index} {...tutor} />
      ))}
    </div>
  );
};

export default NuestrosTutores;
