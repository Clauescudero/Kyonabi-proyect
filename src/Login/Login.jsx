import "./Login.css";
import { useState } from 'react';

export function Login({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false)

        setUser([nombre])
    };

    return (
        <div className="formRegistro">
            <section >
                <h1>Login</h1>
                <form className="Formulario" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingrese el usuario"
                    />
                    <input
                        type='password'
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Ingresa la contraseña"
                    />
                    <button className="log-but" type="submit">Iniciar sesión</button>
                </form>
                {error && <p id="error">Todos los campos son obligatorios!</p>}
            </section>
        </div>
    );
}

export default Login;
