import axios from 'axios';

const BASE_URL = 'https://64db8bde593f57e435b11e05.mockapi.io'

export const fetchContacts = async () => {
  const resp = await axios.get(`${BASE_URL}/cars`);
  return resp.data;
};

export const createContacts = async (contactData) => {
  const resp = await axios.post(`${BASE_URL}/cars`, contactData);
  return resp.data;
}; 

export const deleteContacts = async (id) => {
  const resp = await axios.delete(`${BASE_URL}/cars/${id}`);
  return resp.data;
}; 