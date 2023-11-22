import React from 'react';
import './Herramientas.css';
const TarjetaHerramienta = ({ name, description, link, logo }) => {
    return (
        <div className="herram-card">
            <div className="herram-logo">
                <img src={logo} alt={`${name} Logo`} />
            </div>
            <div className="herram-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Ir a {name}
                </a>
            </div>
        </div>
    );
};

export default TarjetaHerramienta;


