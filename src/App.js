import { Footer, Login, Navbar, ViewProducts } from "./components/index";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AboutUs, Blogs, ContactUs, Home, Shop } from "./pages/index";

import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextApp } from "./contexts/ContextApp";
import { getAllProducts } from "./services/service";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [listCart , setListCart] = useState([]);
  const location = useLocation();
  const isLogin = location.pathname === "/Login";
  // const [loading, setloading] = useState(false);
  // const [groups, setGroups] = useState([]);

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

  return (
    <div className="container-fluid">
      <ContextApp.Provider
        value={{ products, setProducts, product, setProduct ,listCart ,setListCart}}
      >
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login to="/Login" />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home to="/home" />} />
          <Route path="/shop" element={<Shop to="/shop" />} />
          <Route path="/shop/products/:productId" element={<ViewProducts />} />
          <Route path="/aboutUs" element={<AboutUs to="/aboutUs" />} />
          <Route path="/blogs" element={<Blogs to="/blogs" />} />
          <Route path="/contactUs" element={<ContactUs to="/contactUs" />} />
        </Routes>
        {!isLogin && <Footer />}
      </ContextApp.Provider>
    </div>
  );
};

export default App;
