import React from "react";
import image_my from '../img/profile.jpg';
import { AiOutlineDownload } from 'react-icons/ai';

const About = () => {
  return(
    <>
      <div className="row px-md-6" id="about">
        <div className="container">
          <div className="row"> 
            <div className="col-12 text-center">
              <h1 className="text-custom-primary">About Me</h1>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-6 d-grid align-items-center justify-content-center">
              <div className="">
                <img src={image_my} className="img img-fluid p-md-5" />
              </div>
            </div>
            <div className="col-md-6 d-grid align-item-center jusity-content-center">
              <div className="py-md-5">
                <h4>I'm Makarand Chikhale. I'm React Frontend Developer.</h4>
                <p className="h5 fw-light">
                  Self-learner<br />
                  React Frontend Developer<br />
                  Good knowledge of ReactJs, Redux & Redux Toolkit<br />
                  Having skill to develop Responsive web pages suitable for various devices by using 
                  Bootstrap.<br />
                  I also develop templates to populate JSON data on page.<br />
                  Having skill to display JSON data on page by using plain JavaScript / jQuery as well as by 
                  using AngularJs. React Js. <br />
                  Develop responsive dashboard design using bootstrap 3, 4 & 5.<br />
                  Innovative UI Developer skilled in creating fresh, modern design.<br />
                  Problem-solver successful at collaborating with technical teams attractive and engaging 
                  result.<br />
                  Good Team member<br />
                  Sincere, Discipline, Hardworking<br />
                  Planning to learn Angular and Python near future.<br />
                </p>
                <a type="button" href="../../src/makarand_chikhale_new.pdf" download="makarand_chikhale_resume" className="btn btn-md my-md-2 btn-outline-custom-primary"><AiOutlineDownload />&nbsp;Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;