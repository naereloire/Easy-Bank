/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, reduzir } from './Store/contador';

const Contador = () => {
	const contador = useSelector((state) => state.contador);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Contador</h1>
			<button onClick={() => dispatch(incrementar())}>+</button>
			<button onClick={() => dispatch(reduzir())}>-</button>
			<p>{contador}</p>
		</div>
	);
};

export default Contador;
