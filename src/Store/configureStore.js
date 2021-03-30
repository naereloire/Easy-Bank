/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';

const reducer = combineReducers({ user });
const store = configureStore({ reducer });
export default store;
