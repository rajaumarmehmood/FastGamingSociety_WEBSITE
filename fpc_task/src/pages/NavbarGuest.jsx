import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarGuest = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-brand-link">FGC</Link>
    </div>
    <div className="navbar-links">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </nav>
);

export default NavbarGuest;
