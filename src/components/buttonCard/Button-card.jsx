import React from 'react';
import {
  StyledNavImg,
  StyleCardBt,
} from '../styledComponents/styledComponents';

const ButtonCard = (props) => {
  const { handleCLick, value, subtitle, img } = props;

  return (
    <StyleCardBt onClick={handleCLick} value={value}>
      <StyledNavImg src={img} alt="" />
      <div>{subtitle}</div>
    </StyleCardBt>
  );
};
export default ButtonCard;
