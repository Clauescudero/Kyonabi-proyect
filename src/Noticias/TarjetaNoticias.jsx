import React from 'react';
import './Noticias.css';
const TarjetaNoticias = ({ name, description, link, logo }) => {
    return (
        <div className="Noticias-card">
            <div className="Noticias-logo">
                <img src={logo} alt={`${name} Logo`} />
            </div>
            <div className="Noticias-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Ir a {name}
                </a>
            </div>
        </div>
    );
};

export default TarjetaNoticias;