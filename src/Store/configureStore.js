/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador';

const reducer = combineReducers({ contador });
const store = configureStore({ reducer });
export default store;
