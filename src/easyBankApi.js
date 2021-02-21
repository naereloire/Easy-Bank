import axios from 'axios';

const easyBankApi = 'http://localhost:8080/api/';
const axiosInstance = axios.create({
  baseURL: easyBankApi,
  headers: { 'Content-Type': 'application/json' },
});
export default axiosInstance;
