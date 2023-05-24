import React from "react";
import "./css/styles.css";
import slide1 from "./images/slide1.jpg";

function AboutUs() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6" data-aos="zoom-in">
          <img src={slide1} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 aboutText">
          <h1 className="text-center text-danger">About Us</h1>
          <h5 className="text-center">We Are The Leaders In The</h5>
          <h5 className="text-center">Technology Industry</h5>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.
            </p>
            <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
              Mauris et orci.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
