import { Navbar } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { AboutUs, Blogs, Home, Shop } from "./pages/index";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home to="/home" />} />
        <Route path="/shop" element={<Shop to="/shop" />} />
        <Route path="/aboutUs" element={<AboutUs to="/aboutUs" />} />
        <Route path="/blogs" element={<Blogs to="/blogs" />} />
      </Routes>
    </div>
  );
}

export default App;
