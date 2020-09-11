import React from 'react';
import Logotype from '../../images/logo-mirart.png';
import SignOut from '../signOut/SignOut';

const Header = (props) => {
  return (
    <header>
      <nav>
        <figure>
          <img src={Logotype} alt="Logotipo" />
        </figure>
        <section>
          <h3>Olá {props.name}</h3>
          <span>Conta:{props.account}</span>
        </section>
        <SignOut />
      </nav>
    </header>
  );
};
export default Header;
