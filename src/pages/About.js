import React from 'react';
import '../App.css';

function About() {
  return (
        
    <div className='about-container'>
            <p class='about-intro-p'>Ms. Smith has experience working in marketing, communications, design and development for clients in the public and nonprofit sectors across multiple professional services industries.</p>
            <p class='about-contact-line'>e: smithrkorey@gmail.com | p: 641-485-5491</p>
            <p class='about-education-title'><strong>Education</strong></p>
            <div className='about-education-list'>
                <p>BA, Advertising, Iowa State University</p>
                <p>User Experience, General Assembly</p>
                <p>Full-Stack Coding Bootcamp, University of Denver</p>
                <p>Project Management Program, Cornell University</p>
            </div>

      </div>
  );
}

export default About;

