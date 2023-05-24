import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import SharedLayout from "./components/SharedLayout";
import ForgottenPassword from "./pages/ForgottenPassword";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 2000,
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

// Create a Protected Route
export function ProtectedRoute({ children }) {
  if (localStorage.getItem("company")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
