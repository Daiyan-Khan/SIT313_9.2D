import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Assuming you want to style the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <button type="button">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button type="button">About</button>
          </Link>
        </li>
        <li>
          <Link to="/plans"> {/* New Plans Link */}
            <button type="button">Plans</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button type="button">Contact</button>
          </Link>
        </li>
        <li>
          <Link to="/articles-page">
            <button type="button">Articles</button>
          </Link>
        </li>
        <li>
          <Link to="/tutorials">
            <button type="button">Tutorials</button>
          </Link>
        </li>
        <li>
          <Link to="/find-question">
            <button type="button">Find Question</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
