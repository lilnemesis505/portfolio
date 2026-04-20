// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact']; // id ของแต่ละหน้า
      const scrollPosition = window.scrollY + 100; // บวก offset เล็กน้อย

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar-container">
      <a href="#home" className="logo">Portfolio</a>

      <ul className="nav-links">
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Project</a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;