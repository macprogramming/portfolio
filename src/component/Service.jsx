import React from "react";
import { AiOutlineBulb, AiOutlineDesktop, AiOutlineFundProjectionScreen } from 'react-icons/ai'
const Service = () => {
  return(
    <>
      <div className="row px-md-5 mb-md-4" id="services">
        <div className="container">
          <div className="row"> 
            <div className="col-12 text-center">
              <h1 className="pb-3 text-custom-primary">My Service</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-3 g-2 g-lg-3" >
            <div className="col mh-100">
              <div className="p-3 card rounded-0 shadow-lg border-0 h-100 service">
                <div className="card-header border-0 bg-white">
                  <AiOutlineBulb fontSize={'30px'} />
                </div>
                <div className="card-body">
                  <h5>Creative Design</h5>
                  <p>Web design is a similar process of creation, with the intention of presenting...</p>
                </div>
              </div>
            </div>
            <div className="col mh-100">
              <div className="p-3 card rounded-0 shadow-lg border-0 h-100 service">
                <div className="card-header border-0 bg-white">
                  <AiOutlineDesktop fontSize={'30px'} />
                </div>
                <div className="card-body">
                  <h5>Web Developement</h5>
                  <p>Having skill to working knowledge of Web Development like Javascript, jQuery, AngularJs, Node.js, Express.js</p>
                </div>
              </div>
            </div>
            <div className="col mh-100">
              <div className="p-3 card rounded-0 shadow-lg border-0 h-100 service">
                <div className="card-header border-0 bg-white">
                  <AiOutlineFundProjectionScreen fontSize={'30px'} />
                </div>
                <div className="card-body">
                  <h5>App Developement</h5>
                  <p>Having skill to develope apk using bootstrap and web technologies to build apk. Desigin creative app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;