import React, { useState } from 'react';
// eslint-disable-next-line
import { db, auth } from '../../config/fireconfig';
import authMainErrors from './firebase-error';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../images/logo-mirart.png';
import Button from '../../components/common/button/Button';
import {
  StyleDiv,
  StyleInput,
  StyledNavImg,
  DivCenter,
} from '../../styledComponents/styledComponents';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let [errorMsg, setErrorMsg] = useState();

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Foi direcionado para a página home');
        props.history.push('/home');
      })
      .catch(function (error) {
        if (authMainErrors[error.code]) {
          setErrorMsg(authMainErrors[error.code]);
        } else {
          setErrorMsg('Ocorreu um erro. Tente novamente');
        }
      });
  };

  const sendFormToAuth = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <main>
      <DivCenter>
        <StyledNavImg src={Logo} width="150px" />
        <styled className="image"></styled>
        <form>
          <DivCenter>
            <StyleInput
              type="email"
              value={email}
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <StyleInput
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button name="Entrar" handleCLick={(e) => sendFormToAuth(e)} />
          </DivCenter>
        </form>
        <div>
          <p>
            <Link
              to="/register"
              style={{ color: 'white', margin: '20px' }}
              activeStyle={{ color: 'red' }}
            >
              {' '}
              CADASTRAR-SE{' '}
            </Link>
          </p>
        </div>
        <div>{errorMsg ? <div>{errorMsg}</div> : null}</div>
      </DivCenter>
    </main>
  );
};

export default withRouter(Login);
