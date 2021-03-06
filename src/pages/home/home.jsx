import React, { useState, useEffect } from 'react';
import easyBankApi from '../../easyBankApi';
import { firebase } from '../../config/fireconfig.js';
import Button from '../../components/buttonCard/Button-card';
import Header from '../../components/header/Header.jsx';
import imgCard from '../../images/card.png';
import imgWallet from '../../images/wallet.png';
import imgtransfer from '../../images/transfer.png';
import imgClose from '../../images/close.png';
import updatearrow from '../../images/arrows.png';
import Modal from '../../components/modal/modal.jsx';

import {
  StyledNavImg,
  DivEnd,
  StyleInput,
  DivPing,
  DivMain,
  TextDiv,
  DivRow,
  DivButtons,
  DivCenter,
  StyleCardBt,
} from '../../components/styledComponents/styledComponents';

const Home = () => {
  const [name, setName] = useState(''),
    [numbAccount, setNumbAccount] = useState(''),
    [show, setShow] = useState(false),
    [balance, setBalance] = useState(0),
    [transferCPF, setTransferCPF] = useState(''),
    [transferValue, setTransferValue] = useState(''),
    [errorTransf, setErrorTransf] = useState(''),
    [showCard, setshowCard] = useState(false),
    [showTransfer, setshowTransfer] = useState(false),
    [titularId, setTitularId] = useState(0);

  const getBalance = (titularId) => {
    setShow(true);
    easyBankApi.get(`account/titular_id/${titularId}`)
      .then((resp) => {
        console.log(titularId)
        setBalance(resp.data.balance);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.message);
        setShow(false);
      });
  };
  const transferBtwAccounts = (originTitularId, destinyId, value,) => {
    return easyBankApi.put(`account/transfer`, {
      originId: originTitularId,
      destinyId: destinyId,
      money: value,
    });
  };

  const TransferAccount = () => {
    easyBankApi.get(`titular/cpf/${transferCPF}`)
      .then((response) => {
        if (response.data.id) {
          const destinyTitularId =
            response.data.id;
          transferBtwAccounts(titularId, destinyTitularId, transferValue)
            .then(() => {
              setshowTransfer(false);
              getBalance(titularId);
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
      user ? setTitularId(user.photoURL) : setTitularId();
      easyBankApi.get(`account/titular_id/${user.photoURL}`).then((resp) => {
        setNumbAccount(resp.data.accountNumber)
        setBalance(resp.data.balance);
        setShow(false);
      }).catch((error) => {
        console.log(error.message);
        setShow(false);
      });

    });
  }, []);

  return (
    <>
      <Header name={name} account={numbAccount} />
      <DivPing />

      <Modal show={show} id="loading">
        <DivCenter>
          <p> Carregando . . . </p>
        </DivCenter>
      </Modal>
      <Modal show={showCard} id="card">
        <DivCenter>
          <DivEnd>
            <StyledNavImg
              src={imgClose}
              width="1.5em"
              onClick={() => {
                setshowCard(false);
              }}
            />
          </DivEnd>
          <p> Cartão Solicitado </p>
        </DivCenter>
      </Modal>
      <Modal show={showTransfer} id="form-transfer">
        <DivCenter>
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
          <DivButtons>
            <StyleCardBt onClick={TransferAccount}>Enviar</StyleCardBt>
            <StyleCardBt
              onClick={() => {
                setshowTransfer(false);
              }}
            >
              Cancelar
            </StyleCardBt>
            <span>{errorTransf}</span>
          </DivButtons>
        </DivCenter>
      </Modal>

      <DivMain>
        <DivEnd>
          <StyledNavImg
            width="20px"
            src={updatearrow}
            onClick={() => {
              getBalance(titularId);
            }}
          />
        </DivEnd>
        <TextDiv color="#8b8b8b">Saldo disponível</TextDiv>
        <DivRow>
          <TextDiv color="#ff5691">R$ </TextDiv>
          <TextDiv color="#24007c"> {balance},00</TextDiv>
        </DivRow>
      </DivMain>
      <DivButtons>
        <Button
          subtitle="Solicitar cartão"
          img={imgCard}
          handleCLick={() => {
            setshowCard(true);
          }}
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
      </DivButtons>
    </>
  );
};

export default Home;
