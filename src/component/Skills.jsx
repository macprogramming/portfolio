import React from "react";
import { AiOutlineDashboard } from 'react-icons/ai'
import Slider from "react-slick";

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: true,
    // asNavFor: '.slider-nav'
  };
  return(
    <>
      <div className="row px-md-5 mb-md-4" id="skills">
        <div className="container">
          <div className="row"> 
            <div className="col-12 text-center">
              <h1 className="pb-3 text-custom-primary">My Skills</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Slider {...settings}>
                <div>
                  <div className="card text-center bg-white mx-2 shadow-lg border-0 service">
                    <div className="card-header bg-white border-0">
                      <AiOutlineDashboard fontSize={'60px'} />
                    </div>
                    <div className="card-body">
                      <h4>Fast</h4>
                      <p>Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card text-center bg-white mx-2 shadow-lg border-0 service">
                    <div className="card-header bg-white border-0">
                      <AiOutlineDashboard fontSize={'60px'} />
                    </div>
                    <div className="card-body">
                      <h4>Responsive</h4>
                      <p>My layouts will work on any device, big or small.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card text-center bg-white mx-2 shadow-lg border-0 service">
                    <div className="card-header bg-white border-0">
                      <AiOutlineDashboard fontSize={'60px'} />
                    </div>
                    <div className="card-body">
                      <h4>Intuitive</h4>
                      <p>Strong preference for easy to use, intuitive UX/UI.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card text-center bg-white mx-2 shadow-lg border-0 service">
                    <div className="card-header bg-white border-0">
                      <AiOutlineDashboard fontSize={'60px'} />
                    </div>
                    <div className="card-body">
                      <h4>Dynamic</h4>
                      <p>Websites don't have to be static, I love making pages come to life.</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-md-5">
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '90%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">HTML / HTML 5</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS / CSS 3</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '90%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Javascript</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JQuery</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">React Js</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Angular Js</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Node Js</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '65%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Express Js</div>
              </div>
              <div className="progress my-2">
                <div className="custom-prgessbar" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MondoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;