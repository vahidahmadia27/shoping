import { createContext } from "react";

export const ContextApp = createContext({
  loading: false,
  setLoading: () => {},
  product: [],
  products: [],
  setProducts: () => {},
  group: [],
});
