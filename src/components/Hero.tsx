
import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.png';

// 1. Import ไอคอน
import { 
  FaInstagram, 
  FaFacebook,
  FaGithub
} from 'react-icons/fa';

// 2. (ที่ขาดไป) Import TypeAnimation 
import { TypeAnimation } from 'react-type-animation';


// --- SocialLinks Component ---
const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/lilnemesis505" className="social-icon">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/pongsakron.maneesai.2024" className="social-icon">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/lilnemesis999/" className="social-icon">
        <FaInstagram />
      </a>
    </div>
  );
};


// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <section id='home' className="hero-container">
      {/* 1. ฝั่งข้อความ (ซ้ายมือ) */}
      <div className="hero-content-left">
        <h1 className="hero-title">Hi, I'm <span className="highlight-name text-glow">NAM</span></h1>

        <TypeAnimation
          sequence={[
            'Web Develop/IT Supoort', // พิมพ์คำนี้
            5000,               // หยุด 3 วินาที
            '',                 // ลบทั้งหมด
            3000                // หยุด 1 วิ
          ]}
          wrapper="h2"
          className="hero-subtitle"
          speed={10}
          deletionSpeed={5}
          repeat={Infinity}
        />
        {/* --------------------------- */}
        <p className="hero-description">
          Ponsakorn Maneesai Bachelor Degree on Information Tecnology. I have experience in Web Development
          and Coputer Maintenance
          <br />
        </p>
        
        
        
        <SocialLinks /> {/* <-- เรียกใช้งาน SocialLinks ตรงนี้ */}
<button className="cta-button">Contact Me</button>
      </div>

      <div className="hero-content-right">
        <div className="image-glow-wrapper">
          <img src={profileImage} alt="Asep Profile" className="profile-img" />
        </div>
      </div>

     
      <div className="animated-shape shape-1 circle"></div>
      <div className="animated-shape shape-2 square"></div>
      <div className="animated-shape shape-3 triangle"></div>
      <div className="animated-shape shape-4 circle"></div>
      <div className="animated-shape shape-5 square"></div>
    </section>
  );
};

export default Hero;