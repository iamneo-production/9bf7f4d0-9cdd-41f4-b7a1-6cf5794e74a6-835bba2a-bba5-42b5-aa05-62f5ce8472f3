import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/homepage.css"

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-name"><i>Lets Vote</i></span>
          </div>
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Add the video background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Centered text with custom color */}
      <div className="centered-text">
        <h1>We Celebrate <span className="birthday-party-text">Right To Vote</span></h1>
      </div>

      {/* Add the rest of your content here */}
    </div>
  );
}

export default HomePage;
