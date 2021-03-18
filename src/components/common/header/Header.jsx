import React from 'react';
// import Logotype from '../../../images/logo-mirart.png;'
import SignOut from '../../signOut/SignOut';
import {
  Navtop,
  StyledNavImg,
  DivCenter,
} from '../../../styledComponents/styledComponents';

const Header = (props) => {
  return (
    <Navtop>
      {/* <StyledNavImg src={Logotype} alt="Logotipo" width="70px" /> */}
      <DivCenter>
        <span>OLÁ {props.name ? props.name.toUpperCase() : ''}</span>
        <span>CONTA </span>
        <span>{props.account}</span>
      </DivCenter>
      <SignOut />
    </Navtop>
  );
};
export default Header;
