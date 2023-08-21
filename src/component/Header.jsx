import React from "react";
import Home from "./Home";
import Footer from "./Footer";


const Header = () => {
  return(
    <>
      <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light bg-white px-md-5 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-uppercase fw-bold heading-title" href="/">My <span>Portfolio</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#services">Serices</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#mywork">My Work</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <Home />
      <Footer />
    </>
  )
}

export default Header;