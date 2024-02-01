import { createContext } from "react";

export const ContextApp = createContext({
  loading: false,
  setLoading: () => {},
  products: [],
  setProducts: () => {},
  product: {},
  setProduct: () => {},
  group: [],
  listCart:[{}] , 
  setListCart: () => {},
  blog:[],
  setBlog: () => {},
});
