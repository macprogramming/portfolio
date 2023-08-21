import React from "react";
import { AiOutlineBulb, AiOutlineDashboard, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineDesktop, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import Slider from "react-slick";
import Homebanner from "../static/Homebanner";
import About from "../static/About";
import Service from "./Service";
import Skills from "./Skills";
import Mywork from "./Mywork";
import Contact from "./Contact";

const Home = () => {
  
  return(
    <>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
        <div className="container-fluid">
          <Homebanner />
          <About />
          <Service />
          <Skills />
          <Mywork />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home;