// Create your About component here
import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am a passionate software developer with expertise in full-stack development. 
            I enjoy creating innovative solutions and working with cutting-edge technologies. 
            My journey in software development has been driven by curiosity and the desire 
            to build applications that make a difference.
          </p>
          <p className="about-description">
            When I'm not coding, I enjoy learning new technologies, contributing to open-source 
            projects, and sharing knowledge with the developer community. I believe in continuous 
            learning and staying updated with the latest industry trends.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="/assets/login.png" 
            alt="About Me" 
            className="about-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;