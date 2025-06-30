// Create your Body component here
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Body = () => {
  return (
    <div id="home" className="body">
      <div className="body-avatar">
        <img 
          src='/assets/avatar.jpg'
          alt="Profile Avatar" 
          className="avatar-img"
        />
      </div>
      <div className="body-info">
        <h1 className="body-name">Nathan Achar</h1>
        <p className="body-profession">Software Architect</p>
      </div>
      <div className="body-links">
        <a href="https://github.com/Ndubito" className="social-link">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nathan-achar-476175239/" className="social-link">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Body;