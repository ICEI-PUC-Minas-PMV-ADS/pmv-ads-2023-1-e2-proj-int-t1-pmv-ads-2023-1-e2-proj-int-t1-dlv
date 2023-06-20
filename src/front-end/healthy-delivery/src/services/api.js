import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:7042/',
});

export const createSession = async (payload) => {
  return api.post('/Auth', { ...payload });
};

export const createAccount = async (payload) => {
  return api.post('/Usuario', { ...payload });
};

export const getOrders = async () => {
  return api.get(`/orders`);
};

export const getOrderByName = async (payload) => {
  return api.get(`/orders/${payload}`);
};
