/** @format */

import React from "react";
import "./Body.css";
// import deskbg from "./images/bg-intro-desktop.svg";
import phone from "./images/image-mockups.png";
// import mobilebg from "./images/bg-intro-mobile.svg";

const Body = () => {
  return (
    <div>
      <div className='generalbg'>
        <div className='phonediv'>
          <img className='phoneimg' src={phone} alt='' />
        </div>

        <div className='bodytext'>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be one
            stop for spending, saving, budgeting, investing and much more.
          </p>
          <div className='btndiv'>
            <button className='bodybtn'>
              <b>Request Invite</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
