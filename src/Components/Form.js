import React, { useState } from 'react';
import { firebase } from '../config/fireconfig.js';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
// https://cors-anywhere.herokuapp.com
// accounts/child
const requisicaoUrl = '/https://qacst-ppi.hubprepaid.com.br/';

const ObjetoTest = {
  idempotencyKey: '1a6b0c3c-1a98-4ddc-8f10-5dad741a7ef3',
  properties: 'sdfwerhrebgh',
  owner: {
    type: 'PJ',
    name: 'Jon Snow Corporative ',
    companyName: 'TT',
    email: 'jon@ppi.com.br',
    homePhone: '1131859600',
    businessPhone: '1131859600',
    mobilePhone: '1131859600',
    address: {
      street: 'Winterfell',
      number: '529',
      district: 'Winterfell',
      city: 'Westeros',
      state: 'SP',
      zipcode: '06460080',
    },
    identifierDocument: {
      document: '00270965000102',
      type: 'CNPJ',
    },
    documents: [
      {
        type: 'CNPJ',
        document: '00270965000102',
      },
    ],
  },
  responsible: {
    type: 'PF',
    name: 'Jon Snow',
    companyName: 'TT',
    email: 'jon@ppi.com.br',
    homePhone: '1131859600',
    businessPhone: '1131859600',
    mobilePhone: '1131859600',
    address: {
      street: 'Winterfell',
      number: '529',
      district: 'Winterfell',
      city: 'Westeros',
      state: 'SP',
      zipcode: '06460080',
    },
    identifierDocument: {
      document: '76227631019',
      type: 'CPF',
    },
    documents: [
      {
        type: 'CPF',
        document: '76227631019',
      },
    ],
  },
};

axios.defaults.baseURL = requisicaoUrl;
// axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Form = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const setElements = (event, callbackSet) => {
    event.preventDefault();
    callbackSet(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        ObjetoTest.owner.email = email;
        ObjetoTest.responsible.email = email;
        ObjetoTest.idempotencyKey = uuid();

        axios({
          method: 'post',
          url: 'partner-interface/accounts/child',
          data: ObjetoTest,
        }).then((response) => {
          result.user
            .updateProfile({
              displayName: 'teste',
              phoneNumber: parseInt(response.data.financialOperationKey),
              tenantId: parseInt(response.data.financialOperationKey),
            })
            .then(() => {
              console.log(response.data.financialOperationKey);
              console.log(result.user);
            });
        });
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="EMAIL"
          onBlur={(e) => {
            setElements(e, setEmail);
          }}
        ></input>
        <input
          type="password"
          placeholder="SENHA"
          onBlur={(e) => {
            setElements(e, setPassword);
          }}
        ></input>
        <button type="submit" onClick={handleRegister}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};
