import React from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { FaGlobeAfrica } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="container-fluid footer-bg mt-5">
      <div className="row">
        <div className="col-md-3">
          <h5 className="text-white pt-5">Our Offices</h5>
          <ul>
            <li>
              <Link to="" className="link-text">
                <FaGlobeAfrica style={{ marginRight: "10px" }} />
                45, Itolo Street, Surulere, Lagos
              </Link>
            </li>
            <li>
              <Link to="" className="link-text">
                <AiOutlinePhone style={{ marginRight: "10px" }} />
                +2348119772009, +2348094833549
              </Link>
            </li>
            <li>
              <Link to="" className="link-text">
                <AiOutlineMail style={{ marginRight: "10px" }} />
                infor@ernzotech.com.ng
              </Link>
            </li>
          </ul>
          <div className="social">
            <AiFillFacebook
              size="20px"
              style={{ color: "white", marginRight: "10px" }}
            />
            <AiFillTwitterCircle
              size="20px"
              style={{ color: "white", marginRight: "10px" }}
            />
            <AiFillYoutube
              size="20px"
              style={{ color: "white", marginRight: "10px" }}
            />
            <AiOutlineWhatsApp
              size="20px"
              style={{ color: "white", marginRight: "10px" }}
            />
          </div>
        </div>
        <div className="col-md-3">
          <h5 className="text-white pt-5">Quick Link</h5>
          <ul>
            <li>
              <Link to="/about" className="link-text">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="link-text">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-text">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="link-text">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/" className="link-text">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-white pt-5">Business Hours</h5>
          <ul>
            <li>
              <h6 className="link-text">Monday - Friday</h6>
              <h6 className="link-text">09:00am - 07:00pm</h6>
            </li>
            <li>
              <h6 className="link-text">Saturday</h6>
              <h6 className="link-text">09:00am - 02:00pm</h6>
            </li>
            <li>
              <h6 className="link-text">Sunday</h6>
              <h6 className="link-text">Closed</h6>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="text-white pt-5">NewsLetter</h5>
          <ul>
            <li>
              <h6 className="link-text">
                You can as well subscribe to our newsletter
              </h6>
            </li>
          </ul>
          <div>
            <form>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  style={{
                    marginBottom: "20px",
                  }}
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 footer-bottom bg-dark">
          <div className="footer-text text-center">
            <h6 className="text-white pt-4">
              Copyright &copy; @ernzotech. All right reserved
            </h6>
            <h6 className="text-white">Designed by Ernest 2023</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
