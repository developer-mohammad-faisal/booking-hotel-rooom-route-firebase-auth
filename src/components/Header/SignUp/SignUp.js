import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }

  // useEffect(() => {
  //   if(user){
  //     navigate('/')
  //   }
  // }, [navigate, user])

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setError("Password did not match");
      return;
    }
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h3 className="form-title">Sign Up</h3>
          <form onSubmit={handleCreateUser}>
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
                type="Password"
                name="Password"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                 className="rounded-pill"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <p style={{ color: "red" }}>{hookError}</p>

            {loading && <p>Loading....</p>}

            <div className="or">
            <div></div>
            <span className="or-style">or</span>
            <div></div>
          </div>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>
          <p className="create-account mt-2 d-flex justify-content-end">
            <Link to="/login">Already have an account</Link>
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
    </div>
  );
};

export default SignUp;
