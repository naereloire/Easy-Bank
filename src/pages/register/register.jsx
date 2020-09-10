import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form.jsx';
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
  let history = useHistory();
  const [dadosUser, setDadosUser] = useState({});

  const btnBack = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const handleRegister = (event) => {
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
      <button type="submit" onClick={handleRegister}>
        ENVIAR
      </button>
      <button type="" onClick={btnBack}>
        VOLTAR
      </button>
    </form>
  );
};

export default Register;
