import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

  if (user) { 
    navigate(from, { replace: true });
  }

  const handleLoginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };


  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Login</h3>
        <form onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-pill"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
               className="rounded-pill"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <p style={{ color: "red" }}>{error}</p>

            {loading && <p>Loading....</p>}
          </div>

          <div className="or">
            <div></div>
            <span className="or-style">or</span>
            <div></div>
          </div>

          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="create-account mt-4 d-flex justify-content-end">
          <Link to="/signup">Create an new account</Link>
        </p>

        <div className=" d-flex mt-4 justify-content-between">
          <img
            width={"40px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
          <img
            width={"40px"}
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          <img
            width={"40px"}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
