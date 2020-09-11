import React from 'react';
import { StyleBtn, StyledNavImg } from '../styledComponents/styledComponents';

const ButtonCard = (props) => {
  const { handleCLick, value, subtitle, img } = props;

  return (
    <button onClick={handleCLick} value={value}>
      <StyledNavImg src={img} alt="" />
      <div>{subtitle}</div>
    </button>
  );
};
export default ButtonCard;
