import React, { useState, useEffect } from 'react';
import API from '../../api';
import { firebase } from '../../config/fireconfig.js';
import Button from '../../components/buttonCard/Button-card';
import Header from '../../components/header/Header.jsx';
import imgCard from '../../images/card.png';
import imgWallet from '../../images/wallet.png';
import imgtransfer from '../../images/transfer.png';

import updatearrow from '../../images/arrows.png';
import Modal from '../../components/modal/modal.jsx';
import {
  StyledNavImg,
  DivCenter,
  DivEnd,
  StyleInput,
} from '../../components/styledComponents/styledComponents';
import { v4 as uid } from 'uuid';

const Home = () => {
  const [name, setName] = useState(''),
    [numbAccount, setNumbAccount] = useState(''),
    [show, setShow] = useState(false),
    [balance, setBalance] = useState(0),
    [transferCPF, setTransferCPF] = useState(''),
    [transferValue, setTransferValue] = useState(''),
    [errorTransf, setErrorTransf] = useState(''),
    [showTransfer, setshowTransfer] = useState(false);

  const getBalance = (numbAccount) => {
    setShow(true);
    API.get(`accounts/${numbAccount}/balance`)
      .then((response) => {
        setBalance(response.data.balance);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.message);
        setShow(false);
      });
  };
  const transferBtwAccounts = (
    numbAccountOrigin,
    numbDestiny,
    quantityMoney,
  ) => {
    return API.post(`accounts/${numbAccountOrigin}/transfer`, {
      amount: quantityMoney,
      toFinancialOperationKey: numbDestiny,
      transferCode: uid(),
      summary: 'Tranferência entre Contas Mirart',
      idempotencyKey: uid(),
    });
  };

  const TransferAccount = () => {
    console.log(`/accounts/search?document=${transferCPF}`);
    API.get(`/accounts/search?document=${transferCPF}`)
      .then((response) => {
        console.log(response.data._embedded);
        if (response.data._embedded.accounts) {
          const destAccount =
            response.data._embedded.accounts[0].financialOperationKey;
          transferBtwAccounts(numbAccount, destAccount, transferValue)
            .then(() => {
              setshowTransfer(false);
              getBalance(numbAccount);
            })
            .catch((error) => {
              setErrorTransf(error.message);
            });
        } else {
          setErrorTransf('Conta Não Encontrada');
        }
      })
      .catch((error) => {
        setErrorTransf(error.message);
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

      <Modal show={show} id="loading">
        <p> Carregando . . . </p>
      </Modal>

      <Modal show={showTransfer} id="form-transfer">
        <StyleInput
          onBlur={(event) => {
            setTransferCPF(event.target.value);
          }}
          placeholder="cpf"
          type="text"
        ></StyleInput>
        <StyleInput
          onBlur={(event) => {
            setTransferValue(event.target.value);
          }}
          placeholder="valor"
          type="number"
        ></StyleInput>
        <button onClick={TransferAccount}>Enviar</button>
        <button
          onClick={() => {
            setshowTransfer(false);
          }}
        >
          Cancelar
        </button>
        <span>{errorTransf}</span>
      </Modal>

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
      <Button
        subtitle="Transferencia entre Contas"
        img={imgtransfer}
        handleCLick={() => {
          setshowTransfer(true);
        }}
      />
    </>
  );
};

export default Home;
