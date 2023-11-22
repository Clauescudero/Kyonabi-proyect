import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"
import { useUser } from "../Usercontext/UserContext";
import { useNavigate } from "react-router-dom";



// import { Link } from 'react-router-dom';

const NavBar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogueado, setUserLogueado] = useState({});
  const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [userEmail, setUserEmail] = useState("");
  const { user, setUser } = useUser();
  const navigate = useNavigate();



  // Funciones para manejar cambios en los campos de entrada
  const handleEmail = (e) => { // El evento que escucha corresponde a la escritura en el input
    // e = evento // target = input // value = el valor del input del email
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {// Misma lógica
    // e = evento // target = input // value = el valor del input de la contraseña
    setPassword(e.target.value);
  };

  // Elimina la información del usuario almacenada en el almacenamiento local y recarga la página para simular un cierre de sesión.
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Actualiza el contexto al cerrar sesión
    navigate('/login')
    window.location.reload();
  };
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    // Construir un objeto de usuario con la información ingresada
    const user = {
      email: email,
      password: password,
    };
    // Limpiar los campos de entrada
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  
  // Realiza una solicitud POST al servidor con la información de inicio de sesión proporcionada por el usuario.
  // Es necesario instalar cors en nuestro backend que nos permite dar funcionalidad a nuestro proyecto en node para poder gestionar el tema de los permisos  
    fetch("http://localhost:8080/api/v1/login", {  // Misma ruta definida en backend 
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Cabecera que indica que el contenido es de tipo JSON
      },
      body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
    })
      .then((response) => response.json()) // Después de realizar la solicitud HTTP, el método .json() se utiliza para extraer y parsear la respuesta como JSON.
      .then((data) => {  
        // Si la solicitud es exitosa, actualiza el estado userLogueado con la respuesta del servidor y almacena el token JWT en el almacenamiento local.
        setEmail(""); // Se limpian los estados despues de enviar el formulario
        setPassword("");
        setUserLogueado(data); // actualiza el estado userLogueado
        const token = jwtDecode(JSON.stringify(data.token)); // Decodifica el token recibido del servidor
        console.log(token);
        localStorage.setItem("token", JSON.stringify(data.token)); // Almacena el token JWT en el almacenamiento local del navegador. Esto es común en la autenticación para mantener el estado de sesión del usuario incluso después de recargar la página.
      });
  };

  // Recuerda: JSON.parse es una función en JavaScript que se utiliza para convertir una cadena JSON en un objeto JavaScript
  // Recuerda: JSON.stringify es un método en JavaScript que se utiliza para convertir un objeto JavaScript en una cadena JSON
  
  //Almacena la información del usuario en el almacenamiento local si el estado userLogueado tiene un status de 200.
  useEffect(() => {
    if (userLogueado.status === 200) {
      const userData = userLogueado.data || {};
      localStorage.setItem("user", JSON.stringify(userData));
      setUserLocal(userData);
      setUserEmail(userData.email);
    }
  }, [userLogueado]);
 
  // Actualiza el estado userLocal con la información del usuario almacenada en el almacenamiento local.
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUserLocal(JSON.parse(localStorage.getItem("user"))); //obtiene el valor almacenado en el almacenamiento local. Este valor generalmente es una cadena de texto, ya que el almacenamiento local solo puede almacenar cadenas. Luego, JSON.parse se utiliza para convertir esa cadena JSON en un objeto de JavaScript.
    }
  }, [userLogueado]);
  console.log('userLocal:', userLocal);

  return (
    <nav  style={{ backgroundColor:'rgb(62, 0, 98)', height:'5rem' }} className="navbar navbar-dark  fixed-top">
      <div className="container-fluid">
        <Link to="/">
        <a style={{ textDecoration:'none' }}  className="navbar-brand" href="/">Kyonabi</a>
        </Link>
        <div className="d-flex align-items-center">
        {localStorage.getItem("user") !== null && (
          <>
            <button type="button" style={{ backgroundColor: '#6a00a7' }} className="btn btn-dark me-3" onClick={handleLogout}>
               Cerrar sesión
            </button>
            <Link to={`/Perfil/${userLocal.id}`}>
              <button type="button" style={{ backgroundColor: '#6a00a7' }} className="btn btn-dark me-3">
                Perfil
              </button>
            </Link>

          </>
                
              )}
        {localStorage.getItem("user") === null && (
            <>
              <Link to="/Login">
                <button type="button" style={{ backgroundColor: '#6a00a7' }} className="btn btn-dark me-3">
                  Ingresa
                </button>
              </Link>
              <Link to="/Registro">
                <button type="button" style={{ backgroundColor: '#6a00a7' }} className="btn btn-dark me-3">
                  Registrate
                </button>
              </Link>
            </>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span style={{ backgroundColor:'rgb(62, 0, 98)' }} className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div style={{ backgroundColor:'#6a00a7' }}  className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ backgroundColor:'rgb(62, 0, 98)' }} className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li>
                    <div className="col-6">
                {localStorage.getItem("user") !== null && (
                  <div>
                    <h3>Usuario</h3>
                    <p>Nombre: {userLocal.name}</p>
                    <p>Email: {userLocal.email}</p>
                  </div>
                )}
              </div>
                </li>
                <li className="nav-item">
                  <Link to={'/'}>
                    <a className="nav-link active" aria-current="page" href="">
                    Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/sugerencia'}>
                    <a className="nav-link active" aria-current="page" href="#">
                    Sugerencias
                    </a>
                  </Link>
                </li>
                <li  className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Estudiantes
                  </a>
                  <ul style={{ backgroundColor:'#6a00a7' }} className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to="/contenidos">
                        <a className="dropdown-item" >
                          Temas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/herramientas">
                      <a className="dropdown-item">
                        Herramientas
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Calendar">
                          <a className="dropdown-item" >
                            Seguimiento emocional
                          </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docentes
                  </a>
                  <ul style={{ backgroundColor:'#6a00a7' }} className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Recursos
                      </a>
                    </li>
                    <li>
                      <Link to="/Planificacion">
                      <a className="dropdown-item" href="#">
                        Planificacion
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Formulariodocente">
                      <a className="dropdown-item" href="#">
                        ¡Quiero ser voluntario!
                      </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;