/** @format */

import { LOGGED_USER_GET } from '../../../././src/easyBankApi';
import createAsyncSlice from '../helper/createAsyncSlice';

const slice = createAsyncSlice({
	name: 'user',
	fetchConfig: (body) => LOGGED_USER_GET(body),
});

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
	await dispatch(fetchUser(user.email, user.password));
};
