import React from "react";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'

const Contact = () => {
  return(
    <>
      <div className="row px-md-5 mb-md-4 py-md-4" id="contact">
        <div className="container">
          <div className="row rowMargin">
            <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1 className="text-custom-primary mb-5">Contact</h1>
            </section>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-grid align-item-center jusity-content-center">
              <div className="card border-0 shadow-lg">
                <img src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" className="img-card-top" />
                <div className="card-body">
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                  <p>Phone : <a className="link" href="tel:73500758282">+91 73500758282</a></p>
                  <p>Email : <a className="link" href="mailTo:makarandchikhale19@gmail.com">makarandchikhale19@gmail.com</a></p>
                  <div>
                    <p className="text-uppercase text-custom-primary fw-bold">Find with me</p>
                    <div className="row row-cols-1 row-cols-lg-6 g-2 g-lg-3">
                      <div className="col">
                        <div className="shadow-lg shadow-box rounded-1">
                          <a href="/"><AiOutlineLinkedin fontSize={'30px'} /></a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="shadow-lg shadow-box rounded-1">
                          <a href="/"><AiOutlineFacebook fontSize={'30px'} /></a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="shadow-lg shadow-box rounded-1">
                          <a href="/"><AiOutlineInstagram fontSize={'30px'} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-grid align-item-center jusity-content-center">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <form action="" className="row-form">
                    <div className="form-group">
                      <label for="" className="text-custom-primary">Your Name</label>
                      <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
                      <p id="errName" className="error"></p>
                    </div>
                    <div className="form-group">
                      <label for="" className="text-custom-primary">Phone Number</label>
                      <input type="text" id="email" name="email" className="form-control" placeholder="Phone no." />
                      <p id="errEmail" className="error"></p>
                    </div>
                    <div className="form-group">
                      <label for="" className="text-custom-primary">Your Email</label>
                      <input type="email" id="email" name="email" className="form-control" placeholder="email@gmail.com" />
                      <p id="errEmail" className="error"></p>
                    </div>
                    <div className="form-group">
                      <label for="" className="text-custom-primary">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                      <p id="errSubject" className="error"></p>
                    </div>
                    <div className="form-group">
                      <label for="" className="text-custom-primary">Message</label>
                      <textarea name="message" id="message" cols="30" rows="4" className="form-control" placeholder="Message"></textarea>
                      <p id="errMessage" className="error"></p>
                    </div>
                    <div className="form-group d-grid">
                      <button type="button" id="btnSendMessage" className="btn btn-block d-block btn-outline-custom-primary">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;