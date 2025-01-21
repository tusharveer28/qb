import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-logo">qubehealth</div>
        <div className="nav-links">
          <a href="#">Join the #QubeCrew</a>
          <a href="#">Healthcare Provider Partners</a>
          <a href="#">In the News</a>
          <button className="login-button">Employer Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;