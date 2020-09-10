import React from 'react';

const ButtonCard = (props) => {
    const { handleCLick, value, name } = props;

    return (
        <button onClick={handleCLick} value={value}>
            {name}
        </button>
    );
}

export default ButtonCard;

