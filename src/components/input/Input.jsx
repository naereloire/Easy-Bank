import React from 'react';

const Input = (props) => {
    const { onChange, value, type, placeholder } = props;
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;