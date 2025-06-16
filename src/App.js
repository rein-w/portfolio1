import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="left-container">
          <h2>Left Container (1/3)</h2>
          <p>This is the left container. It takes up one-third of the screen width.</p>
        </div>
        <div className="right-container">
          <h2>Right Container (2/3)</h2>
          <p>This is the right container. It takes up two-thirds of the screen width.</p>
           <p>This is the right container. It takes up two-thirds of the screen width.</p>
            <p>Some more content...</p>
            <p>Some more content...</p>
            <p>Some more content...</p>
            /* Add many more paragraphs until a scrollbar appears */
            <p style={{ height: '1000px' }}>This is a tall paragraph to force scrolling.</p>
        </div>
      </div>
    </div>
  );
}

export default App;