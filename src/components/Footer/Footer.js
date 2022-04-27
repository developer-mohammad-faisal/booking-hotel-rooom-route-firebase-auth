import React, { Fragment } from 'react';
import './Footer.css'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <Fragment>
    <div className="row mx-0 bg-dark mt-5 text-white p-5 ">
      <div className="col-md-6">
        <img width={150} src='https://i.pinimg.com/736x/8d/ae/8c/8dae8cdb2eee1177417df34b2904d107--hotel-logo-great-logos.jpg' alt="" />
      </div>

      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6">
            <p>About Hotel Room </p>
            <p>Read our blog</p>
            <p>Sing up to Room</p>
            <p>Add your Room</p>
          </div>
          <div className="col-md-6">
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View all cities</p>
            <p>Hotel near me</p>
          </div>
        </div>
      </div>
    </div>

    <div className="row mx-0 bg-dark text-white pb-3">
      <div className="col-md-6 footer">
        <p><small>Copyright © {year} online food</small></p>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-4">
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-4">
            <p>Terms of Use</p>
          </div>
          <div className="col-md-4">Pricing</div>
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default Footer;