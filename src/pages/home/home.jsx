import React, { useState, useEffect } from 'react';
import API from '../../api';
import { firebase } from '../../config/fireconfig.js'
import Button from '../../components/buttonCard/Button-card';
import Header from '../../components/header/Header.jsx';
import imgCard from '../../images/card.png';
import imgWallet from '../../images/wallet.png';

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
      <Header
        name={name}
        account={numbAccount} />
      <div>
        <span>Saldo disponível</span>
        <span>R$</span>
        <span>{balance}</span>
        <button
          onClick={() => {
            getBalance(numbAccount);
          }}
        >
          Atualizar
    </button>
      </div>
      <Button
        subtitle="Solicitar cartão"
        img={imgCard}
      // handleCLick={cardRequest()}
      />
      <Button
        subtitle="Controle suas finanças"
        img={imgWallet}
      />
    </>

  )
}

export default Home