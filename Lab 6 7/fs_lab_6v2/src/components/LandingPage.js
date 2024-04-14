// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import video from '../assests/demo.mp4';

function LandingPage() {
  return (
    <div className="landing-container">
      <video width="800" height="550" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

      <div className="info-container">
        <h1>Welcome to our Website!</h1>
        <div>
          <h2>ResumeRevealer: Advanced Resume Parsing Challenge</h2>
          <p>
            ResumeRevealer project is a comprehensive resume parser capable of extracting detailed information from resumes in various formats, including PDF, JPG, HTML, DOC, etc. The parser  accurately classifies text into distinct sections such as education, work experience, and skills. Additionally, it sequences these sections based on dates wherever available.
          </p>
          <p>
            An advanced feature of the ResumeRevealer involves implementing a skill extraction mechanism. This feature mines detailed skills and competencies from project descriptions and position roles within the resume, highlighting the candidate's specific abilities and expertise.
          </p>
          <Link to="https://resume-revealer.streamlit.app/">Demo (Streamlit)</Link>
          <br />
          <Link to="https://github.com/astro215/ResumeRevealer">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
