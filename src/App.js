import { Navbar, ViewProducts } from "./components/index";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { AboutUs, Blogs, Home, Shop } from "./pages/index";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextApp } from "./contexts/ContextApp";
import { getAllProducts } from "./services/service";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: products } = await getAllProducts();
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <ContextApp.Provider
        value={{ products, setProducts, product, setProduct }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home to="/home" />} />
          <Route path="/shop" element={<Shop to="/shop" />} />
          <Route path="/shop/products/:productId" element={<ViewProducts />} />
          <Route path="/aboutUs" element={<AboutUs to="/aboutUs" />} />
          <Route path="/blogs" element={<Blogs to="/blogs" />} />
        </Routes>
      </ContextApp.Provider>
    </div>
  );
};

export default App;
