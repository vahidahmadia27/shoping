import imageLogin from "../assets/images/imgLogin.jpg";
import Logo from "../assets/icon/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2 className="text-center">login / sign in </h2>
      <div className="row card-login align-items-center">
        <div className="col-4 m-0 p-0">
          <form>
            <div className="d-flex-column justify-content-center m-2 ">
              <div className="text-center">
                <img src={Logo} alt="Logo" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, quidem?
                  <Link>Sign ing</Link>
                </p>
              </div>

              <div className="">
                <label htmlFor="UseName">UserName</label>
                <br />
                <input type="text" />
              </div>
              <div className="">
                <label htmlFor="Password">Password</label>
                <br />
                <input type="text" />
              </div>
              <div className="text-center mt-2">
                <Link>forget Password ?</Link>
              </div>
              <div className="text-center mt-2">
                <button>submit</button>
              </div>
            </div>
            <div className="text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                veniam.
              </p>
            </div>
          </form>
        </div>
        <div className="col-8 p-0 m-0">
          <img src={imageLogin} className="login-img" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
