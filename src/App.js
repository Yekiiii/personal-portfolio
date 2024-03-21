import './App.css';
import { useEffect } from 'react';
import Repositories from './repositories';
import Certifications from './certifications';
import WorkExperience from './workExperience';


function PortHeader(){
  return(
<nav className="navbar">
            <div className="navbar-container">
                <p className="navbar-logo">
                    K
                </p>
                <div className="navbar-links">
                    <a className="navbar-link">Somet</a>
                    
                    <a  className="navbar-link">Cart</a>
                    <a  className="navbar-link">Products</a>
                </div>
            </div>
        </nav>
  );
}





function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup observer if needed
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const mcStyle={
  color: 'hsl(197, 95%, 56%),',
  }

  return (
    <div className="App">
      <div className="App-header">
        <PortHeader/>
        <div id="hello-div">
        <p id="hello-text" className="fade-in-hello hidden">
          Hello!
        </p>
        <p id="name-text" className="fade-in-name hidden" >My name is <span id="span-text-name">Kaartikey</span> and this is my portfolio</p>
        </div>
        <div id="about-me-div">
        <p id="about-me-title" className='hidden'>A little about me...</p>
        <p id="about-me-text" className='hidden'>Hello there! I'm Kaartikey, a Software Developer. You can call me Yeki / Kj too! . I strive for perfection in the things I like to do, be it something very inconsequential or of utmost importance. Serious notes aside, I support <span id="mcSpan">Manchester City</span>. I love listening to <span id="musicSpan">music</span>. I love playing <span id="gamesSpan">video games</span> like Valorant and Genshin Impact.I've also played CODM on a professional level. I love watching <span id="animeSpan">anime</span> and i love <span id="codeSpan">coding</span>.
        <br/></p>
        <p id="about-me-text" className='hidden'>
        As a web developer intern at Business Web Solutions, I contributed to the development and maintenance of web applications using Django, React, Tailwind, PostgreSQL. I also learned and applied best practices for web development, such as code quality, testing, debugging, and documentation. 
        <br/></p>
        <p id="about-me-text" className='hidden'>I have a Bachelor of Science in Information Technology from Narsee Monjee College of Commerce and Economics, where I gained a solid foundation in programming, data structures, algorithms, databases, artificial Intelligence, embedded systems, Internet of things, and web development.
        </p><br/> <p id="about-me-text" className='hidden'>I also obtained three certifications from freeCodeCamp in JavaScript Algorithms and Data Structures, Responsive Web Design and Frontend Development Libraries, which helped me enhance my skills and knowledge in front-end development. </p><br/><p id="about-me-text" className='hidden'>I have also developed a compilation of 2d mini games using Unity which I had developed for my final year project for my degree. There were games like Pong, A bird's eye view zombie survival game, Space runner, an aim trainer, and dodgeball.</p><br/><p id="about-me-text" className='hidden'>I am always eager to learn new technologies and frameworks, and to work on challenging and meaningful projects. I am a team player, a problem solver, and a self-starter.
        </p>
        </div>
        <div id="education-div">
          <p id="ed-text" className='hidden'>My formal education</p>
          <p id="ed-text-info" className='hidden'>These are places that have helped me grow and made me the person that I am today.</p>
          <div className='ed-divs'>
          <a href='https://nldalmia.co.in/' target="#">
            <div className='border-wrapper'>
            <div id="nl-div" className='hidden'>
            <img id="nl-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6j889yQ9H3eHpvkg8Hcm-NCWmT3il0ABQw&usqp=CAU'></img>
            <span className='ed-name color-theme'> N.L. Dalmia High School</span>
            <p className='black'>Physics Chemistry Maths</p>
          </div>
          </div>
          </a>
          <a href='https://nmcollege.in/' target="#">
          <div className='border-wrapper'>
            
          <div id="nm-div" className='hidden' >
          <img id="nm-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagHQr-lCFbgMJ8CmbToIOlBJOPOJOPQQf4Mej5vQtHGtcjO_jrw9T9w_P0zjGovLfYgM&usqp=CAU'></img>
          <span className='ed-name color-theme'> Narsee Monjee College of Commerce and Economics</span>
          <p className='black'>Bachelor of Science in Information Technology</p>
          </div>
          </div>
          </a>
          </div>
        </div>
        <div id="my-work">
          
          <p id="tech-title">My Work Experience</p>
          <WorkExperience/>
        
        </div>
        
        <div id="my-certs">
          
          <p id="tech-title">My Certifications</p>
          <div>
          <Certifications></Certifications>
          </div>
        
        </div>

        <div id="my-repos">
          
          <Repositories/>
          <div>
            
          </div>
        
        </div>
        
        <div id="my-tech">
          
          <p id="tech-title">My Tech Stack</p>
          <div id="tech-grid-container">
          <div id="tech-grid">
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'></img>
          <img className='tech-png' src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png'></img>
          <img className='tech-png' src='https://companieslogo.com/img/orig/U.D-7a606e31.png?t=1634728034'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png'></img>
          <img className='tech-png' src='https://cdn.worldvectorlogo.com/logos/jquery-4.svg'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'></img>
          <img className='tech-png' src='https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png'></img>
          <img className='tech-png' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'></img>
          <img className='tech-png' src='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'></img>
          <img className='tech-png' src='https://mui.com/static/logo.png'></img>
          <img className='tech-png' src='https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png'></img>
          <img className='tech-png' src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png'></img>
          <img className='tech-png' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png
'></img>


          
          </div>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
