import React from 'react';
import './button.css';

const Button = (props) => {
    const { handleCLick, value, name } = props;
    return (
        <button onClick={handleCLick} value={value} className="lab">
            {name}
        </button>
    );
}

export default Button;

