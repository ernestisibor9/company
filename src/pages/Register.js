import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import myLogo from "../components/images/myLogo.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app, fireDb } from "../firebaseConfig";
import { toast } from "react-toastify";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  // Create a function to set image
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields!
    if (fullname === "" || email === "" || password === "" || image === "") {
      return toast.error("Fields cannot be empty");
    }

    // Uploading image file to Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `/usersPhoto/${image.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        // Get Image URL
        getDownloadURL(ref(storage, `/usersPhoto/${image.name}`))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // Add the users details into the Firebase firestore
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                // Add a new document in collection "cities"
                setDoc(doc(fireDb, "users", user.uid), {
                  fullname: fullname,
                  email: email,
                  imageURL: url,
                });
                toast.success("User successfully registered");
              })
              .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage);
                // ..
              });
          })
          .catch((error) => {
            // Handle any errors
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div style={{ height: "880px", backgroundColor: "#2F58CD" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6" data-aos="zoom-out-up">
            <div className="my-logo pt-5">
              <img src={myLogo} alt="" width={100} height={100} />
            </div>
            <div className="card shadow p-3">
              <h4 className="text-center">Sign Up</h4>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
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
                  <div class="mb-3">
                    <label class="form-label">Upload Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Enter password"
                      onChange={(e) => onImageChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    {image && (
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        width={170}
                        height={170}
                      />
                    )}
                  </div>
                  {fullname && email && password && image && (
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="submit">
                        Register
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="account">
                <small>
                  <Link to="/login" className="my-link">
                    Already have an account?
                    <span
                      className="text-danger"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Login
                    </span>
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

export default Register;
