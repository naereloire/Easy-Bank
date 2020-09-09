import axios from 'axios';
import token from './token.js';

const apiBack = 'https://back-hub-app.herokuapp.com/';
const apiUrl = 'https://qacst-ppi.hubprepaid.com.br/partner-interface/';
const axiosInstance = axios.create({
  baseURL: apiBack + apiUrl,
  headers: { Authorization: token, 'Content-Type': 'application/json' },
});
export default axiosInstance;
