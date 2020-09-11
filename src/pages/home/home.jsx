import React, { useState, useEffect } from 'react';
import API from '../../api';
import { firebase } from '../../config/fireconfig.js';
import Button from '../../components/buttonCard/Button-card';
import Header from '../../components/header/Header.jsx';
import imgCard from '../../images/card.png';
import imgWallet from '../../images/wallet.png';
import updatearrow from '../../images/arrows.png';
import {
  StyledNavImg,
  DivCenter,
  DivEnd,
} from '../../components/styledComponents/styledComponents';

const Home = () => {
  const [name, setName] = useState(''),
    [numbAccount, setNumbAccount] = useState(''),
    [balance, setBalance] = useState(0);

  const getBalance = (numbAccount) => {
    API.get(`accounts/${numbAccount}/balance`)
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setName(user.displayName) : setName();
      user ? setNumbAccount(user.photoURL) : setNumbAccount();
      getBalance(user.photoURL);
    });
  }, []);

  return (
    <>
      <Header name={name} account={numbAccount} />

      <DivCenter>
        <DivEnd>
          <StyledNavImg
            width="20px"
            src={updatearrow}
            onClick={() => {
              getBalance(numbAccount);
            }}
          />
        </DivEnd>
        <span>Saldo disponível</span>
        <span>R${balance}</span>
      </DivCenter>
      <Button
        subtitle="Solicitar cartão"
        img={imgCard}
        // handleCLick={}
      />
      <Button
        subtitle="Controle suas finanças"
        img={imgWallet}
        // handleCLick={}
      />
    </>
  );
};

export default Home;
