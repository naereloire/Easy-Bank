import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleCLick} value={props.value}>
            {props.name}
        </button>
    );
}

export default Button;

