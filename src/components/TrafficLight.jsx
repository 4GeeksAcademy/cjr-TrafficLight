import React, { useState } from 'react';

export function TrafficLight() {
    const [activeLight, setActiveLight] = useState(null);

    const handleClick = (light) => {
        setActiveLight(light);
    };

    return (
        <div className="traffic">
            <button className={`light red ${activeLight === 'red' ? 'active' : ''}`} onClick={() => handleClick('red')} />
            <button className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`} onClick={() => handleClick('yellow')} />
            <button className={`light green ${activeLight === 'green' ? 'active' : ''}`} onClick={() => handleClick('green')} />
        </div>
    );
}
