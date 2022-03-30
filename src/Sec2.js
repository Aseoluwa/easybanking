/** @format */

import React from "react";
import "./Sec2.css";
import currency from "./images/image-currency.jpg";
import res from "./images/image-restaurant.jpg";
import plain from "./images/image-plane.jpg";
import conf from "./images/image-confetti.jpg";

const Sec2 = () => {
  return (
    <div className='sec2'>
      <h1>Latest Articles</h1>
      <div className="secdiv11">
      <div className='currencydiv zz'>
        <img className='cur iimg' src={currency} alt='' />
        <p>By Claire Robinson</p>
        <h3>Receive money in any currency with no fees</h3>
        <p className='pp'>
          The World is getting smaller and we're becoming more mobile. So why
          should you be forced to only receive money in a single.....
        </p>
      </div>
      <div className='res zz'>
        <img className='resimg iimg' src={res} alt='' />
        <p>By Wilson Hutton</p>
        <h3>Treat yourself without worrying about money</h3>
        <p className='pp'>
          Our simple budgeting feature allows you to separate out yout spending
          and set realistic limits each month. That means you...
        </p>
      </div>
      <div className='plain zz'>
        <img className='plainimg iimg' src={plain} alt='' />
        <p>By Wilson Hutton</p>
        <h3>Take your Easybank card wherever you go</h3>
        <p className='pp'>
          We want you to enjoy your travels. This is why we don't charge any
          fees on purchase while you're abroad. We'll even show you...
        </p>
      </div>
      <div className='con zz'>
        <img className='conimg iimg' src={conf} alt='' />
        <p>By Wilson Hutton</p>
        <h3>Take your Easybank card wherever you go</h3>
        <p className='pp'>
          We want you to enjoy your travels. This is why we don't charge any
          fees on purchase while you're abroad. We'll even show you...
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default Sec2;
