import React, { useState, useEffect } from 'react';
import './App.css';
import myLogo from './my_logo_r.png';
import Card from './Card.js';
// 1. Import the icons you need from react-icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce website built with the MERN stack.',
    imageUrl: 'https://via.placeholder.com/400x200?text=E-commerce+Site',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Interactive Cooking Blog',
    description: 'A responsive cooking blog with recipe filtering and user comments.',
    imageUrl: 'https://via.placeholder.com/400x200?text=Cooking+Blog',
    tags: ['React', 'CSS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing sales data using D3.js.',
    imageUrl: 'https://via.placeholder.com/400x200?text=Data+Dashboard',
    tags: ['JavaScript', 'D3.js', 'Data'],
  },
  {
    id: 4,
    title: 'Real Estate VR 3D SaaS',
    description: 'Online SaaS for Real Estate Marketing and Photographers',
    imageUrl: 'https://via.placeholder.com/400x200?text=Data+Dashboard',
    tags: ['JavaScript', 'D3.js', 'Data'],
  }
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const results = projectsData.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home" className="navbar-logo">
          <img src={myLogo} alt="logo" />
        </a>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <li><a href="#tech">Tech & Design</a></li>
            <li><a href="#cooking">Cooking</a></li>
            <li><a href="#thoughts">Thoughts</a></li>
        </ul>
        <button className="hamburger-menu" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle navigation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

      <div className="main-content">
        <div className="left-container">
          {/* Main bio content */}
          <div className="left-container-main">
            <h2>Left Container</h2>
            <p>I am a resourceful Technical Business Analyst with a proven track record in leading process transformations and implementing effective system solutions. I specialise in identifying and resolving complex business pain-points, helping organisations enhance their strategic delivery through practical, human-centred solutions.
              <br /><br />
              With a strong foundation in both business and technology, I bridge the gap between stakeholders and developers to deliver value-driven outcomes. I bring clarity to complexity through a deep focus on user experience, clean design, and purposeful functionality — always prioritising simplicity, minimalism, and meaningful impact.</p>
          </div>
          
          {/* 2. ADD THIS NEW FOOTER SECTION */}
          <div className="left-container-footer">
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
            <p className="footer-text">
              <em>Thank you to YM for motivating & inspiring me to create this page.</em>
            </p>
          </div>
        </div>
        
        <div className="right-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by project title..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="card-grid">
            {filteredProjects.map(project => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;