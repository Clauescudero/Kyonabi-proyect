import React, { useState } from "react";
import './FormularioDocentes.css';

const FormularioDocentes = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [materias, setMaterias] = useState('');
    const [experienciaDocente, setExperienciaDocente] = useState('');

    const handleNombreUsuarioChange = (e) => {
        setNombreUsuario(e.target.value);
    };

    const handleEdadChange = (e) => {
        setEdad(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepetirPasswordChange = (e) => {
        setRepetirPassword(e.target.value);
    };
    const handleMateriasChange = (e) => {
        // Obtener todas las opciones seleccionadas
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setMaterias(selectedOptions);
    };

    const handleExperienciaDocenteChange = (e) => {
        setExperienciaDocente(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica si las contraseñas coinciden
        if (password !== repetirPassword) {
            console.error('Las contraseñas no coinciden');
            return;
        }

        try {
            // Envía la información al backend para almacenar en la base de datos
            const response = await fetch('http://localhost:5000/api/docentes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreUsuario,
                    edad,
                    email,
                    password,
                    materia,
                    experienciaDocente,
                }),
            });

            if (response.status === 201) {
                console.log('Docente creado con éxito');
                // Puedes hacer alguna acción adicional después de crear el docente, como redireccionar a otra página
            } else {
                console.error('Error al crear el docente');
            }
        } catch (error) {
            console.error('Error en la solicitud al backend', error);
        }
    };

    return (
        <div className="containers-registro-docente">
            <div className="formulario-registro-docente">
                <h1>Bienvenido a Kyonabi!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="usuario-registro-docente">
                        <label htmlFor="nombreUsuario">Nombre de usuario</label>
                        <input type="text" id="nombreUsuario" name="nombreUsuario" onChange={handleNombreUsuarioChange} />

                        <label htmlFor="edad">Edad</label>
                        <input type="text" id="edad" name="edad" onChange={handleEdadChange} />

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={handleEmailChange} />

                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" onChange={handlePasswordChange} />

                        <label htmlFor="repetirPassword">Repetir Contraseña</label>
                        <input type="password" id="repetirPassword" name="repetirPassword" onChange={handleRepetirPasswordChange} />

                        <label htmlFor="materias">Materias (En el caso de selección múltiple intenta CTRL+Click sobre las materias)</label>
                        <select id="materias" name="materias" multiple value={materias} onChange={handleMateriasChange}>
                        <label>Materias (selección múltiple)</label>
                        <div>
                            <label htmlFor="matematicas">
                                <input
                                    type="checkbox"
                                    id="matematicas"
                                    value="matematicas"
                                    checked={materias.includes("matematicas")}
                                    onChange={handleMateriasChange}
                                />
                                Matemáticas
                            </label>
                            </div>

                            <option value="matematicas">Matemáticas</option>
                            <option value="historia">Historia</option>
                            <option value="recursos">Recursos</option>
                            <option value="creatividad">Creatividad</option>
                            <option value="tecnología">Tecnología</option>
                            <option value="idiomas">Idiomas</option>
                            <option value="habilidades">Habilidades blandas</option>
                            <option value="otra">Otra</option>
                        </select>

                        <label htmlFor="experienciaDocente">Experiencia como Docente</label>
                        <textarea id="experienciaDocente" name="experienciaDocente" onChange={handleExperienciaDocenteChange}></textarea>
                    </div>

                    <div className="btn-container-registro-docente">
                        <button className="btn-registro-docente" type="submit">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioDocentes;
