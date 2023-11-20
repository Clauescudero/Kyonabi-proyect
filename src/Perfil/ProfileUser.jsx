import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas React Router para la navegación
import './ProfileUser.css';

const ProfileUser = () => {
    const userData = {
        username: "UsuarioEjemplo",
        age: 25,
        email: "usuario@example.com",
        avatar: "url_de_la_imagen.jpg",
    };

    return (
        <div className="user-profile-container">
            <div className="user-info">
                <h1>{userData.username}</h1>
                <p>Edad: {userData.age}</p>
                <p>Email: {userData.email}</p>
                <Link to="/calendar">
                    <button className="btn-go-to-calendar">Ir al Calendario</button>
                </Link>
            </div>
            <div className="user-avatar">
                <img
                    className="avatar-image"
                    src={userData.avatar}
                    alt={`${userData.username}'s Avatar`}
                />
            </div>
        </div>
    );
};

export default ProfileUser;
