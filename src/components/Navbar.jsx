import { NavLink } from "react-router-dom";
import logo from "../assets/icon/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav row  align-items-center p-0 m-0">
      <div className="nav-icon col-3  text-center">
        <img src={logo} alt="" />
        <h5 className="d-inline">Furniro</h5>
      </div>
      <div className="col-8 ">
        <ul className="centered-list d-flex d-md-flex d-sm-none d-none">
          <li className="">
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}
              to={"./home"}
            >
              Home
            </NavLink>
          </li>

          <li className="">
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}
              to={"./shop"}
            >
              shop
            </NavLink>
          </li>

          <li className="">
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}
              to={"./aboutUs"}
            >
              aboutUs
            </NavLink>
          </li>

          <li className="">
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",

                  color: isActive ? "red" : "",
                };
              }}
              to={"./blogs"}
            >
              blog
            </NavLink>
          </li>
          <ul className="ms-auto">
            <li>
              <NavLink to={"./Login"}>login</NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
