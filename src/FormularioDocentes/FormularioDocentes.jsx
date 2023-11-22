import React from "react";
import './FormularioDocentes.css'

const FormularioDocentes = () => {
    return (
        <div className="containers-registro">
            <div className="formulario-registro-docente">
                <h1>Bienvenido a Kyonabi!</h1>
                <form action="">
                    <div className="usuario-registro">
                        <label htmlFor="text">Nombre de usuario</label>
                        <input type="text" />
                        <label htmlFor="text">Edad</label>
                        <input type='text'></input>
                        <label htmlFor="text">Email</label>
                        <input type="text" />
                        <label htmlFor="text">Contraseña</label>
                        <input type="password" id="password" name="password" />
                        <label htmlFor="text">Repetir Contraseña</label>
                        <input type="password" id="Confirmarpassword" name="password" />
                        <label htmlFor="aboutMe">Sobre Mí</label>
                        <textarea>
                        
                        </textarea>
                    </div>
                    <div className="btn-container-registro">
                        <button className="btn-registro">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormularioDocentes;