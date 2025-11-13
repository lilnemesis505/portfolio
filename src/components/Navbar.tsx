// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      {/* เพิ่มโลโก้ Portfolio */}
     
        <a href="/" className="logo">Portfolio</a>
       

      <ul className="nav-links">
        <li>
          {/* เพิ่ม class="active" ให้ Home */}
          <a href="#home" className="active">Home</a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;