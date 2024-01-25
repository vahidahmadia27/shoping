import imageLogin from "../assets/images/imgLogin.jpg";

const Login = () => {
  return (
    <>
      <h2 className="text-center">login / sign in </h2>
      <div className="row card-login ">
        <div className="col-6 p-0 m-0">
          <img src={imageLogin} className="login-img" alt="" />
        </div>
        <div className="col-6 m-0 p-0">
          <form></form>
        </div>
      </div>
    </>
  );
};

export default Login;
