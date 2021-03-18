import React from 'react';
import { StyleBtn } from '../../../styledComponents/styledComponents';
import './button.css';

const Button = (props) => {
  const { handleCLick, value, name } = props;
  return (
    <StyleBtn onClick={handleCLick} value={value} className="lab">
      {name}
    </StyleBtn>
  );
};

export default Button;
