
import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.jpg';

// 1. Import ไอคอน
import { 
  FaTiktok, 
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
      <a href="#" className="social-icon">
        <FaTiktok />
      </a>
      <a href="#" className="social-icon">
        <FaGithub />
      </a>
      <a href="#" className="social-icon">
        <FaFacebook />
      </a>
      <a href="#" className="social-icon">
        <FaInstagram />
      </a>
    </div>
  );
};


// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <section className="hero-container">
      {/* 1. ฝั่งข้อความ (ซ้ายมือ) */}
      <div className="hero-content-left">
        <h1 className="hero-title">Hi, I'm <span className="highlight-name text-glow">Han Islat</span></h1>

        {/* 3. (แก้ไข) นำ TypeAnimation กลับมาใช้แทน h2 แบบเดิม */}
        <TypeAnimation
          sequence={[
            'Nothing i can do', // พิมพ์คำนี้
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
          Ponsakorn Maneesai Fake Web Developer and Newbie Editor for photoshop and premiere.
          My Favorite Hobbie is Reader and Listen Music. I have some experience in Web Development
          Now i am learning about to be new prime
          <br />
        Advice: Kill the Ego before the Ego kill you. 
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