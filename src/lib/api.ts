import axios from 'axios';

// ** Create and export axios instance with base url
export const apiClient = axios.create({
  baseURL: 'http://localhost:3333',
});

// ** Create and export axios instance without base url
export const apiInternalClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
