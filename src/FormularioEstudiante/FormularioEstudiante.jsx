import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormularioEstudiante.css'

const UserRegister = () => {
// Obtén la función de navegación proporcionada por react-router-dom  
const navigate = useNavigate();
// Estado local para el nombre, apellido, correo electrónico, contraseña para indicar si el usuario fue creado
const [name, setName] = useState(""); 
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userCreate, setUserCreate] = useState(false);

// Funciones para manejar cambios en los campos de entrada
const handleName = (e) => { // El evento que escucha corresponde a la escritura en el input
  // e = evento // target = input // value = el valor del input del nombre
  setName(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
};

const handleAge = (e) => { // Misma lógica
  // e = evento // target = input // value = el valor del input del apellido
  setAge(e.target.value);
};

const handleEmail = (e) => {
  // e = evento // target = input // value = el valor del input del email
  setEmail(e.target.value);
};

const handlePassword = (e) => {
  // e = evento // target = input // value = el valor del input de la contraseña
  setPassword(e.target.value);
};

// Función para manejar el envío del formulario
const handleSubmit = () => {
  if (!name || !age || !email || !password) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const confirmPassword = document.getElementById("Confirmarpassword").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas deben ser iguales");
    return;
  }

  // Construir un objeto de usuario con la información ingresada
  const user = {
    name: name,
    age: age,
    email: email,
    password: password,
  };

  // Limpiar los campos de entrada
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("Confirmarpassword").value = "";

  // Hacer una solicitud POST a la API para crear un nuevo usuario
  fetch("http://localhost:8080/api/v1/crear", {
    // Misma ruta definida en backend
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Cabecera que indica que el contenido es de tipo JSON
    },
    body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      // Si la creación del usuario fue exitosa, establecer userCreate en true
      if (data.status === 201) setUserCreate(true);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Efecto secundario que se ejecuta cuando userCreate cambia
useEffect(() => {
    if(userCreate){
        navigate('/login')
    }
},[navigate, userCreate])

// El componente devuelve el formulario JSX con los manejadores de eventos vinculad

  return (
      <div className="containers-registro">
          <div className="formulario-registro">
              <h1>Bienvenido a Kyonabi!</h1>
              <form action="">
                  <div className="usuario-registro">
                      <label htmlFor="text">Nombre de usuario</label>
                      <input
                          type="text"
                          className="form-control"
                          id="name"
                          onChange={handleName}
                      />
                      <label htmlFor="text">Edad</label>
                      <input
                          type="number"
                          className="form-control"
                          id="age"
                          onChange={handleAge}
                      />
                      <label htmlFor="text">Email</label>
                      <input
                          type="email"
                          className="form-control"
                          id="email"
                          onChange={handleEmail}
                      />
                      <label htmlFor="text">Contraseña</label>
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={handlePassword}
                      />
                      <label htmlFor="text">Repetir Contraseña</label>
                      <input type="password" id="Confirmarpassword" name="password" />
          
                  </div>
                  <div className="btn-container-registro">
                      <button type="button" className="btn-registro" onClick={handleSubmit}>Crear cuenta</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default UserRegister;
