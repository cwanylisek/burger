import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-d5b8c.firebaseio.com/'
});

export default instance;
