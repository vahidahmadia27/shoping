import React, { useState, useEffect } from "react";
import { Footer, Login, Navbar, ViewProducts } from "./components/index";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AboutUs, Blogs, ContactUs, Home, Shop, Loading } from "./pages/index";
import { ContextApp } from "./contexts/ContextApp";
import { getAllBlog, getAllProducts } from "./services/service";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [listCart, setListCart] = useState([]);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isLogin = location.pathname === "/Login";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      try {
        const { data: fetchedProducts } = await getAllProducts();
        // const { data: fetchedBlogs } = await getAllBlog();
        // setBlog(fetchedBlogs.data);
        setProducts(fetchedProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid">
      <ContextApp.Provider
        value={{
          products,
          setProducts,
          product,
          setProduct,
          listCart,
          setListCart,
          blog,
          setBlog,
        }}
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
