import React from "react";

const Review = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide py-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">What Others Have To Say</h4>
                <h5 className="py-4">
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetu Lorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">What Others Have To Say</h4>
                <h5 className="py-4">
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetu Lorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="d-flex align-items-center justify-content-evenly">
              <img
                src="./images/ReviewImg.svg"
                className="d-block w-25"
                alt="..."
              />
              <div className="w-50">
                <h4 className="fw-bold">What Others Have To Say</h4>
                <h5 className="py-4">
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetu Lorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur
                </h5>
                <h4 className="fw-bold">Lily Watson</h4>
                <h5>Student At Stanford</h5>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev my-auto carousel-btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next my-auto carousel-btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Review;
