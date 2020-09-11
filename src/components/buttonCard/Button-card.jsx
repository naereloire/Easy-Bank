import React from 'react';

const ButtonCard = (props) => {
    const { handleCLick, value, subtitle, img } = props;

    return (
        <button onClick={handleCLick} value={value}>
            <img src={img} alt="" />
            <div>{subtitle}</div>
        </button>
    );
}
export default ButtonCard;

