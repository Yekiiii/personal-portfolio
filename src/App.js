import './App.css';
import { useEffect } from 'react';

function PortHeader(){
  return(
    <div id="port-header">
    <a className="active header-item" href="#home">Home</a>
    <a className="header-item" href="#contact">Contact</a>
    <a className="header-item" href="#about">About</a>
  </div>
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
        <p id="about-me-text" className='hidden'>Hello there! I'm Kaartikey, a FrontEnd Developer. You can call me Yeki / Kj if the first one is too complicated :P . I strive for perfection in the things I like to do, be it something very inconsequential or of utmost importance. Serious notes aside, I support <span id="mcSpan">Manchester City</span>. I LOVE listening to <span id="musicSpan">music</span>. I LOVE playing <span id="gamesSpan">video games</span> like Valorant and Genshin Impact. I LOVE watching <span id="animeSpan">anime</span> And i've started to fall in love with <span id="codeSpan">coding</span>, which made me make this portfolio in the long run.</p>
        <div id="about-grid-container">
        <div id="about-grid" className='hidden'>
          
          <div className='about-grid-item' id="anime">Anime</div>
          <div className='about-grid-item' id="games">Video games</div>
          <div className='about-grid-item' id="music">Music</div>
          <div className='about-grid-item' id="coding">Coding</div>
        </div>
        </div>
        </div>
        <div id="education-div">
          <p id="ed-text" className='hidden'>My formal education</p>
          <p id="ed-text-info" className='hidden'>These are places that have helped me grow and made me the person that I am today.</p>
          <div className='ed-divs'>
          <a href='https://nldalmia.co.in/' target="_blank">
            <div id="nm-div" className='hidden'>
            <img id="nl-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6j889yQ9H3eHpvkg8Hcm-NCWmT3il0ABQw&usqp=CAU'></img>
            <span className='ed-name'> N.L. Dalmia High School</span>
            <p>Physics Chemistry Maths</p>
          </div></a>
          <a href='https://nmcollege.in/' target="_blank">
          <div id="nm-div" className='hidden' >
          <img id="nm-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagHQr-lCFbgMJ8CmbToIOlBJOPOJOPQQf4Mej5vQtHGtcjO_jrw9T9w_P0zjGovLfYgM&usqp=CAU'></img>
          <span className='ed-name'> Narsee Monjee College of Commerce and Economics</span>
          <p>Bachelor of Science in Information Technology</p>
          </div>
          </a>
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
          </div>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
