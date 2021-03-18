import React from 'react';
import { withRouter } from 'react-router-dom';
import LogOut from '../../images/signOut.png';
import { auth } from '../../config/fireconfig';
import { StyledNavImg } from '../../styledComponents/styledComponents';

const SignOut = (props) => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledNavImg
      src={LogOut}
      alt="Sair"
      onClick={signOut}
      width="30px"
      padding="10px"
    />
  );
};

export default withRouter(SignOut);
