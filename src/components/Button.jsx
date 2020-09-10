import React from 'react';

const Button = (props) => {
    const { handleCLick, value, name } = props;
    return (
        <button onClick={handleCLick} value={value}>
            {name}
        </button>
    );
}

export default Button;

