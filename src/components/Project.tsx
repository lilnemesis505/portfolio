
import React from 'react';
import './Project.css';
import proj1image from '../assets/proj1.png';
import proj2image from '../assets/proj2.png';
import { Link } from 'react-router-dom';
const Project: React.FC = () => {
  return (
    <section id='projects' className="projects-section">
      <div className="animated-shape shape-1 circle"></div>
      <div className="animated-shape shape-2 square"></div>
      <div className="animated-shape shape-3 triangle"></div>
      <div className="animated-shape shape-4 circle"></div>
      <div className="animated-shape shape-5 square"></div>
      
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {/* Card ที่ 1 */}
        <div className="project-card">
          <div className="project-image-container">
            <img src={proj1image} alt="Project 1" className="project-img" />
          </div>
          <div className="project-info">
            <h3>Rimnong Cafe App</h3>
            <p>ระบบจัดการคาเฟ่ พัฒนาด้วย Laravel และ Flutter</p>
            <Link to="/project/rimnong" className="detail-button" style={{ textDecoration: 'none' }}>
              View Details
            </Link>
          </div>
        </div> {/* <-- ตรวจสอบว่ามีปิด div ของ card ที่ 1 ตรงนี้ */}

        {/* Card ที่ 2 */}
        <div className="project-card">
          <div className="project-image-container">
            <img src={proj2image} alt="Project 2" className="project-img" />
          </div>
          <div className="project-info">
            <h3>CMU COOP PORTAL</h3>
            <p>Web App ศูนย์รวมบริการต่างๆของร้านสหกรณ์มหาวิทยาลัยเชียงใหม่ พัฒนาด้วย Laravel FrameWork กับ Vue.js</p>
            <a href="https://www.cmucoop.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="detail-button">Go</button>
            </a>
          </div>
        </div> {/* <-- ปิด div ของ card ที่ 2 */}
      </div> {/* <-- ปิด div ของ projects-grid (สำคัญมาก เพื่อให้ flex ทำงาน) */}
    </section>
  );
};

export default Project;