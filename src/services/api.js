import axios from 'axios';

// https://sujeitoprogramador.com/rn-api/?api=posts
// ?api=posts

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/rn-api/'
});

export default api;