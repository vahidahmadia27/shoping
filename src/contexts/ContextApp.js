import { createContext } from "react";

export const ContextApp = createContext({
  loading: false,
  setLoading: () => {},
  productda: [],
  products: [],
  setProducts: () => {},
  group: [],
});
