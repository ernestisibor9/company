import React from "react";
import "./css/styles.css";
import {
  FaDev,
  FaOpera,
  FaLayerGroup,
  FaPhotoVideo,
  FaStamp,
  FaTaxi,
} from "react-icons/fa";

function ServicesCard() {
  return (
    <div className="container mt-5">
      <div className="row gy-5">
        <h1 className="text-center text-danger">Our Services</h1>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaDev size="75px" />
              <h5 class="card-title text-dark mt-3">Web Development</h5>
              <p class="card-text">
                Web Development includes HTML, CSS, Bootstrap, JavaScript, React
                and any Backend Languages
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaOpera size="75px" />
              <h5 class="card-title text-dark mt-3">Web Design</h5>
              <p class="card-text">
                Web Design includes HTML, CSS, Bootstrap, Figma, UI/UX Designs
                JavaScript and React
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaLayerGroup size="75px" />
              <h5 class="card-title text-dark mt-3">Mobile Appication</h5>
              <p class="card-text">
                Mobile Application includes HTML, CSS, Bootstrap, JavaScript,
                React and React Native
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaPhotoVideo size="75px" />
              <h5 class="card-title text-dark mt-3">Graphics Design</h5>
              <p class="card-text">
                Graphics Design include PhotoShop, CorelDraw, Illustrator,
                Canva, Paint, and other packages
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaStamp size="75px" />
              <h5 class="card-title text-dark mt-3">Software Development</h5>
              <p class="card-text">
                Software Development includes HTML, CSS, Bootstrap, JavaScript,
                React and any Backend Languages
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4" data-aos="zoom-out-up">
          <div class="card shadow p-3" style={{ width: "21rem" }}>
            <div class="card-body text-center">
              <FaTaxi size="75px" />
              <h5 class="card-title text-dark mt-3">Digital Marketing</h5>
              <p class="card-text">
                Digital Marketing includes online marketing of products which
                you start doing to earn income
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
