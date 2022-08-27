import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ auth, setauth }) => {
  let navigate = useNavigate();
  console.log(auth);
  const click = () => {
    setauth(!auth);
    console.log(auth);
    navigate("/protectedpage", { replace: true });
  };
  window.onpopstate = () => {
    navigate("/");
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      Login
      <br />
      <br />
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email@email.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
        />{" "}
        <br />
        <button onClick={click} type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
