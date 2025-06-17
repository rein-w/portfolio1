import React, { useState } from 'react';
import './App.css';
import myLogo from './my_logo_r.png'; // Assuming your logo import is here

function App() {
  // State to track if the mobile navigation is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
        {/* Logo remains on the left */}
        <a href="#home" className="navbar-logo">
          <img src={myLogo} alt="logo" />
        </a>

        {/* Navigation links with a dynamic class */}
        {/* The 'active' class will be added/removed when the menu is toggled */}
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <li><a href="#tech">Tech & Design</a></li>
          <li><a href="#cooking">Cooking</a></li>
          <li><a href="#thoughts">Thoughts</a></li>
        </ul>

        {/* Hamburger Menu Icon - only visible on mobile */}
        {/* It toggles the isNavOpen state on click */}
        <button
          className="hamburger-menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

      <div className="main-content">
        <div className="left-container">
          <h2>Hi, I'm Rein.</h2>
          <p>I am resourceful Technical Business Analyst with a proven track record in leading process
              transformations and implementing effective system solutions. I specialise in identifying and resolving complex business pain-points, helping organisations enhance their strategic delivery through practical, human-centred solutions.
          <br></br>
          <br></br>
              With a strong foundation in both business and technology, I bridge the gap between stakeholders and
              developers to deliver value-driven outcomes. I bring clarity to complexity through a deep focus on user experience, clean design, and purposeful functionality - always prioritising simplicity, minimalism, and meaningful impact.</p>
        </div>
        <div className="right-container">
          <h2>Right Container (2/3)</h2>
          <p>This is the right container. It takes up two-thirds of the screen width.</p>
          <p style={{ height: '1000px' }}>This is a tall paragraph to force scrolling.</p>
        </div>
      </div>
    </div>
  );
}

export default App;