import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/form/Form.jsx';
import { firebase } from '../../config/fireconfig';
import easyBankApi from '../../easyBankApi';
import Button from '../../components/button/Button';

import { DivCenter } from '../../components/styledComponents/styledComponents';

const bodyRegister = (userInfos) => {

  const bodyObj = {
    name: userInfos['Nome'],
    cadastralType: parseInt(userInfos['CPF']),
    email: userInfos['E-mail'],
    phone: parseInt(userInfos['Telefone']),
  };
  return bodyObj;
};

// const startMoney = (numberAccount) => {
//   const initialBalance = 0;
//   API.get(`accounts/${numberAccount}`).then((response) => {
//     transferBtwAccounts(
//       response.data.parentFinancialOperationKey,
//       numberAccount,
//       initialBalance,
//     );
//   });
// };

// const transferBtwAccounts = (numbAccountOrigin, numbDestiny, quantityMoney) => {
//   API.post(`accounts/${numbAccountOrigin}/transfer`, {
//     amount: quantityMoney,
//     toFinancialOperationKey: numbDestiny,
//     transferCode: uid(),
//     summary: 'Tranferência entre Contas Mirart',
//     idempotencyKey: uid(),
//   }).catch((error) => {
//     console.log(error);
//   });
// };

const Register = () => {

  let history = useHistory();

  const [dadosUser, setDadosUser] = useState({}),
    [error, setError] = useState('');
  const btnBack = (event) => {
    event.preventDefault();
    history.push('/');
  };
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(bodyRegister(dadosUser)));
    easyBankApi.post('api/titular/', bodyRegister(dadosUser))
      .then((response) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            dadosUser['E-mail'],
            dadosUser['Senha'],
          )
          .then((result) => {
            result.user
              .updateProfile({
                // photoURL: response.data.financialOperationKey,
                displayName: dadosUser['Nome'],
              })
              .then(() => {
                // startMoney(response.data.financialOperationKey);
                history.push('/home');
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <DivCenter>
      <form>
        <h2>CADASTRO</h2>
        <Form
          options={[
            'Nome',
            'E-mail',
            'Senha',
            'CPF',
            'Telefone',
          ]}
          value={dadosUser}
          setValue={setDadosUser}
        />
        <Button name="Enviar" type="submit" handleCLick={handleRegister} />
        <Button name="VOLTAR" type="submit" handleCLick={btnBack} />
        <p>{error}</p>
      </form>
    </DivCenter>
  );
};
export default Register;
