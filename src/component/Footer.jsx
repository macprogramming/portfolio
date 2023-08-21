import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return(
    <>
      <footer className="footer">
        <div className="py-2 bg-white d-flex align-items-center justify-content-center">
          <p className="m-0 text-custom-primary">&copy; {year}. All rights reserved by mac programming.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;