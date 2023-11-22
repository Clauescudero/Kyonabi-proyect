import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
import './ProfileUser.css';

const ProfileUser = () => {
  const { id } = useParams(); // Obtén la ID de los parámetros de la URL
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        // Realiza la solicitud al servidor usando la ID obtenida de los parámetros de la URL
        const respuesta = await axios.get(`http://localhost:8080/api/v1/getbyid/${id}`);
        setUsuario(respuesta.data.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };
    obtenerUsuario();
  }, [id]);
  const [selectedImage, setSelectedImage] = useState(null);

const handleImageChange = (event) => {
  setSelectedImage(event.target.files[0]);
};

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
  
    try {
      await axios.post('http://localhost:8080/api/v1/uploadImage', formData);
      // Actualiza la interfaz de usuario o realiza otras acciones después de la carga exitosa
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };
  

  if (!usuario) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">Perfil de {usuario.name}</h5>
        <p className="card-text">Edad: {usuario.age}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
        <p>Estado: {usuario.status}</p>
        <p>Materias: {usuario.subjects.join(', ')}</p>
        <p>Descripción: {usuario.description}</p>
        <form>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="button" onClick={handleImageUpload}>Subir Imagen</button>
        </form>
        <Link to="/calendar">
          <button type="button">Ir a Calendario</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileUser;
