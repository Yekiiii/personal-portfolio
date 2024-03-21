import React from 'react'

function Certifications() {
    const certificationsData = [
        { title: "Responsive Web Design", organization: "freeCodeCamp", date: "July 2023", link:"https://freecodecamp.org/certification/fccdc1030ee-b003-4c21-8fe8-78f8f247d3e1/responsive-web-design" },
        { title: "JavaScript Algorithms and Data Structures", organization: "freeCodeCamp", date: "August 2023",link:"https://freecodecamp.org/certification/fccdc1030ee-b003-4c21-8fe8-78f8f247d3e1/javascript-algorithms-and-data-structures" },
        { title: "Front End Development Libraries", organization: "freeCodeCamp", date: "October 2023",link:"https://freecodecamp.org/certification/fccdc1030ee-b003-4c21-8fe8-78f8f247d3e1/front-end-development-libraries" }
      ];
  return (
    <>
    <div className="certifications">
    <div className='border-wrapper'>

      {certificationsData.map((certification, index) => (
        <div className="certificate" key={index}>
          <h2 className='color-theme'>{certification.title}</h2>
          <p>by {certification.organization}</p>
          <p>Date: {certification.date}</p>
          <a target='/' href={certification.link}>Show Credential</a>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Certifications