/** @format */

import React from "react";
import "./Section.css";
import online from "./images/icon-online.svg";
import simple from "./images/icon-budgeting.svg";
import fast from "./images/icon-onboarding.svg";
import Api from "./images/icon-api.svg";

const Section = () => {
  return (
    <div>
      <div className='sec1'>
        <div className='header'>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className='secdivall'>
          <div className='online'>
            <img className='iconimg' src={online} alt='' />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile application allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className='simple'>
            <img className='iconimg' src={simple} alt='' />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly wherever your money goes each month. Receive
              notification when you're close to your hitting limits
            </p>
          </div>
          <div className='fast'>
            <img className='iconimg' src={fast} alt='' />
            <h3>Fast Onboarding</h3>
            <p>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className='Api'>
            <img className='iconimg' src={Api} alt='' />
            <h3>Open API</h3>
            <p>
              Mangege your savings, investment, pension and much more from one
              account. Tracking your money has never been easier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
