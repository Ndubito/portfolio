// Create your Projects component here
import React from 'react';
import Slider from 'react-slick';
import projectsData from '../data/projects.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id="projects" className="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">
        <Slider {...settings}>
          {projectsData.projects.map((project, index) => (
            <div key={index} className="project">
              <div className="content">
                <img 
                  src={project.image || "/assets/Detective.jpg"} 
                  alt={project.name}
                />
                <h3 className="name">{project.name}</h3>
                <p className="description-min">{project.description}</p>
                <button className="project-button">
                  <a href={project.link || "#"} style={{textDecoration: 'none', color: 'inherit'}}>
                    View Project
                  </a>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;