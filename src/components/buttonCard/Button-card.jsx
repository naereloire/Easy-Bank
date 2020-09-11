import React from 'react';
import { StyleBtn } from '../styledComponents/styledComponents';

const ButtonCard = (props) => {
  const { handleCLick, value, subtitle, img } = props;

  return (
    <StyleBtn onClick={handleCLick} value={value}>
      <img src={img} alt="" />
      <div>{subtitle}</div>
    </StyleBtn>
  );
};
export default ButtonCard;
