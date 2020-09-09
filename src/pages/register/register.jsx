import React from 'react';
import API from '../../api.js';

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

const Register = () => {
  const handleClick = () => {
    API.post(`/accounts/child`, ObjetoTest).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const handleGet = () => {
    API.get(`accounts/200001365`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <button type="text" onClick={handleClick}>
        POST
      </button>
      <button type="text" onClick={handleGet}>
        GET
      </button>
    </div>
  );
};

export default Register;
