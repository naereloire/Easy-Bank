/** @format */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import Form from '../../components/common/form/Form';
import { firebase } from '../../config/fireconfig';
import easyBankApi from '../../easyBankApi';
import { DivCenter } from '../../styledComponents/styledComponents';
// import store from '../../Store/configureStore ';
// import { incrementar } from '../../Store/contador';

const getRandom = (min, max) => {
	return Math.random() * (max - min) + min;
};

const bodyRegister = (userInfos) => {
	const bodyObj = {
		name: userInfos['Nome'],
		cadastralType: parseInt(userInfos['CPF']),
		email: userInfos['E-mail'],
		phone: parseInt(userInfos['Telefone']),
	};
	return bodyObj;
};

const bodyCreateAccount = (infosToCreateAccount) => {
	const accountObject = {
		titularId: { id: infosToCreateAccount['id'] },
		agency: 1000,
		accountNumber: getRandom(1000, 10000),
		balance: 100,
	};
	return accountObject;
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
	// store.subscribe(() => {
	// 	console.log('funfou');
	// });

	// store.dispatch(incrementar());
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
		easyBankApi
			.post('titular/', bodyRegister(dadosUser))
			.then((response) => {
				easyBankApi
					.post('account/', bodyCreateAccount(response.data))
					.then((response) => {
						firebase
							.auth()
							.createUserWithEmailAndPassword(
								dadosUser['E-mail'],
								dadosUser['Senha']
							)

							.then((result) => {
								result.user
									.updateProfile({
										displayName: dadosUser['Nome'],
										photoURL: response.data.titularId.id,
									})
									.then(() => {
										history.push('/home');
									});
							})
							.catch((error) => {
								setError(error.message);
							});
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
					options={['Nome', 'E-mail', 'Senha', 'CPF', 'Telefone']}
					value={dadosUser}
					setValue={setDadosUser}
				/>
				<Button name='Enviar' type='submit' handleCLick={handleRegister} />
				<Button name='VOLTAR' type='submit' handleCLick={btnBack} />
				<p>{error}</p>
			</form>
		</DivCenter>
	);
};
export default Register;
