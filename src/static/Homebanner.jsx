import React from "react";
import image from '../img/profile-removebg-preview.png';

const Homebanner = () => {
  return(
    <>
      <div className="row py-2 px-md-5" id="home">
        <div className="col-md-6 d-grid align-items-center jusity-content-center text-center order-1 order-md-0">
          <div className="">
            <p className="text-secondary">WELCOME TO MY WORLD</p>
            <h1 className="fw-bold heading-title">
              Hi, I'm <span>Makarand Chikhale a </span>
              Professional Frontend Developer.
            </h1>
          </div>
        </div>
        <div className="col-md-6 d-grid align-items-center justify-content-center order-0 order-md-1">
          <div className="">
            <img src={image} className="img img-fluid" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homebanner;