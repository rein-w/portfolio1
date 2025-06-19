import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import myLogo from './my_logo_r.png';
import Card from './Card.js';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSearch, FiSliders } from 'react-icons/fi';

// Sample project data - you can replace this with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce website built with the MERN stack.',
    imageUrl: 'https://picsum.photos/id/36/200/300',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Interactive Cooking Blog',
    description: 'A responsive cooking blog with recipe filtering and user comments.',
    imageUrl: 'https://picsum.photos/id/39/200/300',
    tags: ['React', 'CSS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing sales data using D3.js.',
    imageUrl: 'https://picsum.photos/id/43/200/300',
    tags: ['JavaScript', 'D3.js', 'Data'],
  },
  {
    id: 4,
    title: 'Real Estate VR 3D SaaS',
    description: 'Online SaaS for Real Estate Marketing and Photographers',
    imageUrl: 'https://picsum.photos/id/63/200/300',
    tags: ['JavaScript', 'D3.js', 'Data'],
  }
];

const allTags = [...new Set(projectsData.flatMap(p => p.tags))];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null); // Ref to focus the input field

  useEffect(() => {
    let results = projectsData;
    if (searchTerm) {
      results = results.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedTags.length > 0) {
      results = results.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }
    setFilteredProjects(results);
  }, [searchTerm, selectedTags]);

   useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  const handleTagChange = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

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

        {/* This spacer div will push the controls to the right */}
        <div className="spacer" />

        {/* --- CONTROLS MOVED INTO THE NAVBAR --- */}
  <div className="controls-container">
          {/* 4. Updated search container with dynamic class */}
          <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
<button className="search-icon-btn" onClick={() => setIsSearchActive(true)} aria-label="Open search">
  <FiSearch />
</button>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => {if(!searchTerm) setIsSearchActive(false)}} // Optional: close when it loses focus
            />
          </div>
          <div className="filter-container">
<button className="filter-button" onClick={() => setIsFilterOpen(!isFilterOpen)} aria-label="Filter by tags">
  <FiSliders />
</button>
            {isFilterOpen && (
              <div className="filter-dropdown">
                {allTags.map(tag => (
                  <label key={tag} className="filter-tag">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <button className="hamburger-menu" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle navigation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

      {/* --- MAIN CONTENT IS UNCHANGED --- */}
      <div className="main-content">
        <div className="left-container">
            <div className="left-container-main">
                <h2>Reinhardt W.</h2>
                <p>I am a resourceful Technical Business Analyst with a proven track record in leading process transformations and implementing effective system solutions. I specialise in identifying and resolving complex business pain-points, helping organisations enhance their strategic delivery through practical, human-centred solutions.
                    <br /><br />
                    With a strong foundation in both business and technology, I bridge the gap between stakeholders and developers to deliver value-driven outcomes. I bring clarity to complexity through a deep focus on user experience, clean design, and purposeful functionality — always prioritising simplicity, minimalism, and meaningful impact.</p>
            </div>
            <div className="left-container-footer">
                <div className="social-icons">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                </div>
                <p className="footer-text">
                    <em>Thank you to YM for motivating & inspiring me to create this page.</em>
                </p>
            </div>
        </div>
        
        <div className="right-container">
          {/* Controls are no longer here */}
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