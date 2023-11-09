import React, { useState } from 'react';

function DayCell() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        if (clickCount < 7) {
            setClickCount(clickCount + 1);
        } else {
            setClickCount(0);
        }
    };

    const colors = ['white', 'Gold', 'LightGreen', 'LightPink', 'Coral', 'FireBrick', 'DarkSlateBlue', 'CornflowerBlue'];

    return (
        <td
            onClick={handleClick}
            style={{ backgroundColor: colors[clickCount] }}
        ></td>
    );
}

export default DayCell;