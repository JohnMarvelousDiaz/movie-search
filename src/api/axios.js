import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'https://run.mocky.io/v3', 
  // baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'https://www.omdbapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
 