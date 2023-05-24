import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import myLogo from "../components/images/myLogo.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../firebaseConfig";
import { toast } from "react-toastify";

function ForgottenPassword() {
  const [email, setEmail] = useState("");

  // Create a function to handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a functionality that will send the email for password reset
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        toast.error(errorMessage);
      });
  };

  return (
    <div style={{ height: "780px", backgroundColor: "#2F58CD" }}>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="my-logo">
              <img src={myLogo} alt="" width={100} height={100} />
            </div>
            <div className="card shadow p-3">
              <h4 className="text-center">Reset Password</h4>
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
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">
                      Send Password Token
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
