import axios from "axios";

const SERVER_URL_LOCALHOST = "http://localhost:2000";
const SERVER_URL_TAJI = "https://base-api-mr-tag2.cyclic.app/api/shoz";

export const getAllBlog = () => {
  const url = `${SERVER_URL_TAJI}/blogs/client/get-all`;
  return axios.get(url);
};

export const getAllProducts = () => {
  const url = `${SERVER_URL_LOCALHOST}/products`;
  return axios.get(url);
};
// contacts GET method with ID parameter
export const getProduct = (productId) => {
  const url = `${SERVER_URL_LOCALHOST}/products/${productId}`;
  return axios.get(url);
};

export const getAllGroups = () => {
  const url = `${SERVER_URL_LOCALHOST}/groups`;
  return axios.get(url);
};

export const getGroup = (groupId) => {
  const url = `${SERVER_URL_LOCALHOST}/groups/${groupId}`;
  return axios.get(url);
};

export const createContact = (product) => {
  const url = `${SERVER_URL_LOCALHOST}/products`;
  return axios.post(url, product);
};

export const updateProduct = (product, productId) => {
  const url = `${SERVER_URL_LOCALHOST}/products/${productId}`;
  return axios.put(url, product);
};

export const deleteProduct = (productId) => {
  const url = `${SERVER_URL_LOCALHOST}/products/${productId}`;
  return axios.delete(url);
};
