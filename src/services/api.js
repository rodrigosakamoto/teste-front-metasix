import axios from 'axios';

const api = axios.create({
  baseURL: 'https://poc.metasix.solutions/parse/classes/FAQ',
  headers: {
    'X-Parse-Application-Id': 'br.com.metasix.poc',
  },
});

export default api;
