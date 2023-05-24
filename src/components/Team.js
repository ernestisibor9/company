import React from "react";
import "./css/styles.css";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1
          className="text-center text-danger pb-4"
          style={{ fontFamily: "tahoma" }}
        >
          Our Team
        </h1>
        <div className="col-md-3" data-aos="zoom-in">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4rJgGcEhZI-3YYEvjEwqmKgudbfLEyNSeA&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-dark text-center">Isibor Ernest</h5>
              <p class="card-text text-center">CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="zoom-in">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4rJgGcEhZI-3YYEvjEwqmKgudbfLEyNSeA&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-dark text-center">Bill Gates</h5>
              <p class="card-text text-center">Manager</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="zoom-in">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4rJgGcEhZI-3YYEvjEwqmKgudbfLEyNSeA&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-dark text-center">Elon Musk</h5>
              <p class="card-text text-center">Managing Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-3" data-aos="zoom-in">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4rJgGcEhZI-3YYEvjEwqmKgudbfLEyNSeA&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-dark text-center">Jack Ma</h5>
              <p class="card-text text-center">Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
