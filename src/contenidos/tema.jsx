import React from "react";
import './temas.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Temas({ temas, imagenes }) {

    return (
        <>
        <div className="container-temas">
            <div className="row">
                <div className="relacionadas">
                    <h2>{temas}</h2>
                    <div className="secion">
                        <img src={imagenes} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}