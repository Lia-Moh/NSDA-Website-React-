import React from 'react';
import { FaLightbulb, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">

      <div className="about">
        <h2 className="about-title">About NSDA</h2>

        <p className="about-text">
          The Nejm Student Developers Association (NSDA) is a nationwide initiative uniting Muslim students passionate about technology. We aim to nurture talent, promote collaboration, and build tech solutions rooted in Islamic values—empowering the next generation to serve the Ummah through innovation, mentorship, and purposeful development.
        </p>
      </div>

      <div className="mv-container">

        <div className="mission">
          <div className="mission-icon">
            <FaLightbulb size={40} color="#DDA23A" />
          </div>

          <h2 className="mission-title">Mission</h2>

          <p className="mission-text">
            To empower Muslim students across the nation providing mentorship, learning opportunities, and collaborative platforms rooted in Islamic values - enabling them to innovate, grow and contribute meaningfully to the Ummah through technology.
          </p>
        </div>

        <div className="vision">
          <div className="vision-icon">
            <FaEye size={40} color="#DDA23A" />
          </div>

          <h2 className="vision-title">Vision</h2>

          <p className="vision-text">
            To be the leading nationwide Muslim developer community that nurtures faith-driven tech talent, fostering a generation of innovators dedicated to uplifting the Ummah and making lasting positive impacts through technology.
          </p>
        </div>

      </div>

      <div className="beginning">
        <h2 className="beginning-title">How We Began:</h2>

        <p className="beginning-text">
          NSDA was founded on March 31, 2025, through the collaboration of students from eight Ethiopian universities. Sparked by a shared vision to uplift the Ummah through technology, we united to create a faith-driven tech community that empowers Muslim students across the nation with purpose, knowledge, and support.
        </p>
      </div>

    </section>
  );
};

export default About;