import React, { useState } from 'react';
import Form from '../../components/Form.js';
import { v4 as uid } from 'uuid';

const bodyRegister = (userInfos) => {
  const bodyObj = {
    idempotencyKey: uid(),
    properties: 'sdfwerhrebgh',
    owner: {
      type: 'PF',
      name: userInfos['Nome'],
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
        type: 'CPF',
      },
      documents: [
        {
          type: 'CPF',
          document: '00270965000102',
        },
      ],
    },
  };
};

const Register = () => {
  const [dadosUser, setDadosUser] = useState({});

  const handleClick = (event) => {
    event.preventDefault();
    console.log(dadosUser);
  };

  return (
    <form>
      <h2>CADASTRO</h2>

      <Form
        options={[
          'Nome',
          'E-mail',
          'CPF',
          'Endereço',
          'Numero',
          'Cidade',
          'Estado',
          'CEP',
        ]}
        value={dadosUser}
        setValue={setDadosUser}
      />
      <button type="submit" onClick={handleClick}>
        ENVIAR
      </button>
      <button type="" onClick={handleClick}>
        VOLTAR
      </button>
    </form>
  );
};

export default Register;
