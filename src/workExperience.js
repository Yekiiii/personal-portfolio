import React from 'react';

function WorkExperience() {
  return (
    <div className="work-experience">

      <div className="job">
        <div className='job-left'>
        <h2>Web Developer Internship</h2>
        <h2 className='color-theme' >@Business Web Solutions</h2>
        <p>Duration: October 2023 - December 2023</p>
        
      </div>
      <div className='job-right'>
        <p>
        This internship involved common practices of Full Stack development. They
 provided training for technologies like <span className='color-theme'>HTML5, CSS3, JavaScript, Bootstrap,
 jQuery, React, Python, Django, PostgreSQL, Bootstrap and Tailwind CSS</span> all of which are
 frequently used in Web Development.
        </p>
        <div className="skills">
          <h3 className='color-theme'>Skills:</h3>
          <ul>
            <li>PostgreSQL</li>
            <li className='color-theme' >Django</li>
            <li>HTML/CSS/JS</li>
            <li className='color-theme'>React</li>
            <li>Tailwind CSS</li>
            <li className='color-theme'>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default WorkExperience;
