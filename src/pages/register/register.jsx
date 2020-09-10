import React, { useState } from 'react';
import Form from '../../Components/Form.js';

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
        options={['Nome', 'E-mail', 'CPF']}
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
