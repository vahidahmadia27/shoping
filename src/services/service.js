import axios from "axios";

const SERVER_URL = "http://localhost:2000";

export const getAllProducts = () => {
  const url = `${SERVER_URL}/products`;
  return axios.get(url);
};
// contacts GET method with ID parameter
export const getProduct = (productId) => {
  const url = `${SERVER_URL}/product/${productId}`;
  return axios.get(url);
};

export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};

export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};

export const createContact = (product) => {
  const url = `${SERVER_URL}/products`;
  return axios.post(url, product);
};

export const updateProduct = (product, productId) => {
  const url = `${SERVER_URL}/products/${productId}`;
  return axios.put(url, product);
};

export const deleteProduct = (productId) => {
  const url = `${SERVER_URL}/products/${productId}`;
  return axios.delete(url);
};
