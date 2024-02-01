import { Link } from "react-router-dom";
import { ContactUs } from "../pages/index";
import Linkedin from "../assets/icon/icons8-linkedin.svg";
import Instagram from "../assets/icon/icons8-instagram.svg";
import Telegram from "../assets/icon/icons8-telegram.svg";
import Github from "../assets/icon/icons8-github.svg";
import Bootstrap from "../assets/images/bootstrap.png";
import Html from "../assets/images/icons8-html-96.png";
import Css from "../assets/images/icons8-css-96.png";
import ReactImage from "../assets/images/react.png";
import Angular from "../assets/images/icons8-angular-96.png";
import Nodejs from "../assets/images/nodejs.png";

const Footer = () => {
  return (
    <>
      <footer className="link-footer mt-5">
        <div className="d-flex justify-content-around ">
          <div>
            <ul>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/aboutUs"}>AboutUs</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/aboutUs"}>AboutUs</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/aboutUs"}>AboutUs</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="logo-div">
          <div className="d-flex justify-content-around">
            <Link  to={"https://getbootstrap.com/"} target="_blank">
              <img src={Bootstrap} alt="" />
            </Link>
            <Link to={"https://html.com/"}  target="_blank" >
              <img src={Html} alt="" />
            </Link>
            <Link to={"https://nodejs.org/en/"}  target="_blank" >
              <img src={Nodejs} alt="" />
            </Link>
            <Link to={"https://react.dev/"}   target="_blank">
              <img src={ReactImage} alt="" />
            </Link>
            <Link to={"https://angular.io/"}  target="_blank">
              <img src={Angular} alt="" />
            </Link>
            <Link to={"https://html.com/"}   target="_blank">
              <img src={Css} alt="" />
            </Link>
          </div>
        </div>
        <div className="contact-us-footer row align-items-center m-0 p-0">
          <div className="col-4">
            <h2 className="text-title-footer ">Furniro</h2>
          </div>
          <div className="col-4 follow-us">
            <h5 className="text-center">follow Us</h5>
            <div className="d-flex  justify-content-around">
              <Link>
                <img src={Github} alt="" />
              </Link>
              <Link>
                <img src={Instagram} alt="" />
              </Link>
              <Link>
                <img src={Telegram} alt="" />
              </Link>
              <Link>
                <img src={Linkedin} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
