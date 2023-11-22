
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormularioDocentes.css';

const FormularioDocentes = () => {
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);
  const [otrasMaterias, setOtrasMaterias] = useState('');
  const [rol, setRol] = useState('tutor');
  const [userCreate, setUserCreate] = useState(false);

  const handleCheckboxChange = (event) => {
    const materiaSeleccionada = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setMateriasSeleccionadas([...materiasSeleccionadas, materiaSeleccionada]);
    } else {
      setMateriasSeleccionadas(materiasSeleccionadas.filter((materia) => materia !== materiaSeleccionada));
    }
  };

  const handleOtrasMateriasChange = (event) => {
    setOtrasMaterias(event.target.value);
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !age || !email || !password || materiasSeleccionadas.length === 0) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const confirmPassword = document.getElementById("Confirmarpassword").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas deben ser iguales");
      return;
    }

    const user = {
      name: name,
      age: parseInt(age),
      email: email,
      password: password,
      rol: rol,
      subjects: [...materiasSeleccionadas, otrasMaterias].filter(subject => subject),
      description: document.getElementById("aboutMe").value,
    };

    fetch("http://localhost:8080/api/v1/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setName("");
        setAge("");
        setEmail("");
        setPassword("");
        setMateriasSeleccionadas([]);
        setRol("tutor");

        if (data.status === 201) {
          setUserCreate(true);
        } else {
          alert("Error al registrar usuario");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al registrar usuario");
      });
  };

  useEffect(() => {
    if (userCreate) {
      navigate('/login');
    }
  }, [navigate, userCreate]);

  return (
    <div className="containers-registro-docente">
      <div className="formulario-registro-docente">
        <h1>¡Bienvenido a Kyōnabi!</h1>
        <form action="" >
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
              id="age"
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
            <section id="seleccion">
              <label htmlFor="text">Selecciona materias</label>
              <br />
              {['Matemáticas', 'Tecnología', 'Idiomas', 'Historia', 'Recursos', 'Economía', 'Habilidades', 'Creatividad', 'Otras'].map(
                (materia) => (
                  <label key={materia}>
                    <input
                      type="checkbox"
                      name="materias"
                      value={materia}
                      onChange={handleCheckboxChange}
                      checked={materiasSeleccionadas.includes(materia)}
                    />
                    {materia}
                  </label>
                )
              )}
              {materiasSeleccionadas.includes('Otras') && (
                <label>
                  Otras:
                  <input
                    type="text"
                    name="otrasMaterias"
                    value={otrasMaterias}
                    onChange={handleOtrasMateriasChange}
                  />
                </label>
              )}
            </section>

            <label htmlFor="aboutMe">Experiencia como Docente</label>
            <textarea id="aboutMe"></textarea>
          </div>
          <div className="btn-container-registro-docente">
            <button className="btn-registro-docente" type="submit" onClick={handleSubmit}>Crear cuenta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioDocentes;
