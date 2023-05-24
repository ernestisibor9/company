import React from "react";
import "./css/styles.css";
import { FaGlobeAfrica } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function ContactCard() {
  return (
    <div className="container mt-5">
      <div className="row gy-5">
        <h1 className="text-center text-danger">Contact Us</h1>
        <div className="col-md-4" data-aos="flip-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <AiOutlinePhone size="75px" />
              <h5 class="card-title text-dark mt-3">Phone</h5>
              <p class="card-text">+2348119772009</p>
              <p class="card-text">+2348094833549</p>
              <button className="btn btn-primary text-center">Call us</button>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <AiOutlineMail size="75px" />
              <h5 class="card-title text-dark mt-3">Email Address</h5>
              <p class="card-text">ernestisibor@gmail.com</p>
              <p class="card-text">info@ernzotech.com.ng</p>
              <button className="btn btn-primary text-center">Email</button>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="flip-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaGlobeAfrica size="75px" />
              <h5 class="card-title text-dark mt-3">Office Address</h5>
              <p class="card-text">
                45, Itolo Street, Off Eric Moore road, Surulere, Lagos, Nigeria.
              </p>
              <button className="btn btn-primary text-center">Visit us</button>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.279625423578!2d3.3516996!3d6.4862300999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c092459c16b%3A0xcddcf4f7568b9124!2s45%20Itolo%20St%2C%20Iganmu%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1684676124136!5m2!1sen!2sng"
            style={{
              width: "1200px",
              height: "450px",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
