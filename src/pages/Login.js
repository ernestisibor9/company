import React, { useState } from "react";
import "./css/styles.css";
import { Link, useNavigate } from "react-router-dom";
import myLogo from "../components/images/myLogo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Create a function that will handle the authentication
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sign in with email and password
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Store user credentials into the localStorage
        localStorage.setItem("company", JSON.stringify(user));
        // ...
        toast.success("You have successfully login");
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div style={{ height: "780px", backgroundColor: "#2F58CD" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="my-logo  pt-5">
              <img src={myLogo} alt="" width={100} height={100} />
            </div>
            <div className="card shadow p-3">
              <h4 className="text-center">Sign In</h4>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {email && password && (
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="submit">
                        Login
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="account">
                <small>
                  <Link to="/register" className="my-link">
                    Don't Have an Account?{" "}
                    <span
                      className="text-danger"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Create Account
                    </span>
                  </Link>
                </small>
                <small>
                  <Link to="/forgotten-password" className="my-link">
                    Forgot Password?
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
