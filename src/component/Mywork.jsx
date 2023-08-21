import React from "react";
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import project5 from '../img/project5.png';
import project6 from '../img/project6.png';

const Mywork = () => {
  return(
    <>
      <div className="row px-md-5 mb-md-4 py-md-4" id="mywork">
        <div className="container">
          <div className="row rowMargin">
            <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="text-custom-primary">My Work</h1>
            </section>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 g-4 g-lg-3 mt-3 justify-content-center">
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project1} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Application</h5>
                  <p className="card-text">The Services provide for design</p>
                </div>
              </div>
            </div>
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project2} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Application</h5>
                  <p className="card-text">The Services provide for design</p>
                </div>
              </div>
            </div>
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project3} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Development</h5>
                  <p className="card-text">The Services provide for design</p>
                </div>
              </div>
            </div>
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project4} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Application</h5>
                  <p className="card-text">Mobile app landing design & app maintain</p>
                </div>
              </div>
            </div>
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project5} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Development</h5>
                  <p className="card-text">The Services provide for design</p>
                </div>
              </div>
            </div>
            <div className="mh-100">
              <div className="card p-0 shadow-lg border-0 mx-2 h-100">
                <img src={project6} className="card-img-top" alt="..." style={{ height: '40vh' }} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-custom-primary">Development</h5>
                  <p className="card-text">The Services provide for design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mywork;