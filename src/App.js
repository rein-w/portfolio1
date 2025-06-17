import './App.css';
// 1. Import your logo from the src folder
import myLogo from './my_logo_r.png'; 

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* ADDED LOGO HERE */}
        <a href="#home" className="navbar-logo">
          {/* 2. Use the imported logo variable here */}
          <img src={myLogo} alt="logo" />
        </a>
        <ul>
          <li><a href="#tech">Tech</a></li>
          <li><a href="#cooking">Cooking</a></li>
          <li><a href="#thoughts">Thoughts</a></li>
          <li><a href="#Contact">Contact</a></li>
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
            {/* Add many more paragraphs until a scrollbar appears */}
            <p style={{ height: '1000px' }}>This is a tall paragraph to force scrolling.</p>
        </div>
      </div>
    </div>
  );
}

export default App;