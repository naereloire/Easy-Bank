import React from 'react';
import { StyleInput } from '../styledComponents/styledComponents';

const Input = (props) => {
  const { onChange, value, type, placeholder } = props;
  return (
    <StyleInput
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
