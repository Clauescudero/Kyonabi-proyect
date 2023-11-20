import React from "react";
import './temas.css'



export default function Temas({ temas, imagenes }) {

    return (
        <>
            <div className="relacionadas">
                <h4>{temas}</h4>
                <div className="secion">
                    <img src={imagenes} />
                </div>
            </div>
        </>
    )
}