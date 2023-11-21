import React, { useState } from 'react';

function DayCell() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        if (clickCount < 7) {
            setClickCount(clickCount + 1);
        } else {
            setClickCount(0);
        }

        if (colors[clickCount] === 'Coral') {
            alert('Los sentimientos negativos son parte de la vida, está muy bien que los aceptes. Eres muy fuerte por vivirlos aún cuando es difícil y sin embargo no te rindes. ¡Queremos que sepas que nos haces sentir orgullosos de ti!');
        } else if ((colors[clickCount] === 'FireBrick')) {
            alert('¡Tomate un descanso para aclarar la mente! Recuerda: Cuidar de ti y que no es la situación lo que te frustra, es el como la enfrentas; Siempre puedes ser mejor.')
        } else if ((colors[clickCount] === 'DarkSlateBlue')) {
            alert('Ahora no te sientes de lo mejor, y por eso estamos aquí para apoyarte en cada paso del camino, ¡porque Tú importas!')
        }
    }


    const colors = ['white', 'Gold', 'LightGreen', 'LightPink', 'Coral', 'FireBrick', 'DarkSlateBlue', 'CornflowerBlue'];

    return (
        <td
            onClick={handleClick}
            style={{ backgroundColor: colors[clickCount] }}
        ></td>
    );
}

export default DayCell;
