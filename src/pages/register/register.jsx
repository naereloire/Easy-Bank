import React, { useState } from 'react';
import Form from '../../components/Form.js';
import { v4 as uid } from 'uuid';

const bodyRegister = (userInfos) => {
  const bodyObj = {
    idempotencyKey: uid(),
    owner: {
      type: 'PF',
      name: userInfos['Nome'],
      companyName: 'Mirart',
      email: userInfos['E-mail'],
      homePhone: userInfos['Telefone'],
      businessPhone: '1131859600',
      mobilePhone: '1131859600',
      address: {
        street: userInfos['Endereço'],
        number: userInfos['Numero'],
        district: 'Winterfell',
        city: userInfos['Cidade'],
        state: userInfos['Estado'],
        zipcode: userInfos['CEP'],
      },
      identifierDocument: {
        document: userInfos['CPF'],
        type: 'CPF',
      },
      documents: [
        {
          type: 'CPF',
          document: userInfos['CPF'],
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
          'Telefone',
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
