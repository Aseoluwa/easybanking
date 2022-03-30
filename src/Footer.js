/** @format */

import React from "react";
import "./Footer.css";
import logo from "./images/logo.svg";
import fb from "./images/icon-facebook.svg";
import yt from "./images/icon-youtube.svg";
import tw from "./images/icon-twitter.svg";
import pin from "./images/icon-pinterest.svg";
import ig from "./images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className='footdiv'>
      <div className='foot'>
        <div className='Logoandimg'>
          <img className='footimg' src={logo} alt='' />
          <div className='logos'>
            <img src={fb} alt='' />
            <img src={yt} alt='' />
            <img src={tw} alt='' />
            <img src={pin} alt='' />
            <img src={ig} alt='' />
          </div>
        </div>

        <div className='options'>
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className='options'>
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
        <div className="btnend">
          <button className='btn'>
            <b>Request Invite</b>
          </button>
          <p className='end'> @ Easybank. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
