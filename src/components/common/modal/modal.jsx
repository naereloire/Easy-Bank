/** @format */

import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { SecModal, ModalDiv } from '../../../styledComponents/styledComponents';

const slice = createSlice({
	name: 'modal',
	initialState: false,
	reducer: {
		open: () => true,
		close: () => false,
	},
});

export const { abrir, fechar } = slice.actions;
export default slice.reducer;

const Modal = ({ show, children }) => {
	return (
		<ModalDiv show={show}>
			<SecModal>{children}</SecModal>
		</ModalDiv>
	);
};

// export default Modal;
