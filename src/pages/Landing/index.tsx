import React from 'react';

import mockupImage from '../../assets/images/image-mockups.png'

import './styles.css';

function Landing() {
  return (
    <div className="intro">
      <div className="intro-page">
        <img id="mockup" src={mockupImage} alt=""/>
      </div>
      <div className="description-container">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving bogdeting, investing, and much more.
        </p>
        <button>Request Invite</button>
      </div>
    </div>
  );
}

export default Landing;