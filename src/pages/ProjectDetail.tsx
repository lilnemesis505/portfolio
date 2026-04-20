/* src/pages/ProjectDetail.tsx */
import React, { useState } from 'react'; // 1. เพิ่ม useState
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css'; 
import proj1image from '../assets/proj1.png';
import proj1mimage from '../assets/proj1m.jpg';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const isRimnong = id === 'rimnong';

  // 2. State สำหรับเก็บรูปที่กำลังขยาย
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="project-detail-container">
      {/* 3. ส่วนของ Modal Popup */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <img src={selectedImg} alt="Enlarged" />
            <button className="close-btn">&times;</button>
          </div>
        </div>
      )}

      <div className="back-nav">
        <Link to="/" className="back-link">← Back to Portfolio</Link>
      </div>

      <header className="detail-header">
        <h1>{isRimnong ? 'Rimnong Cafe Application' : 'Project Details'}</h1>
        <span className="project-tag">Full-Stack Development</span>
      </header>

      <div className="detail-image-grid">
        <div className="detail-image-wrapper" onClick={() => setSelectedImg(proj1image)}>
          <img src={proj1image} alt="Admin Dashboard" className="img-clickable" />
          <p className="image-caption">Admin Dashboard (Laravel)</p>
        </div>
        
        {/* รูปที่ 2 เป็นแนวตั้ง เราจะคุมขนาดผ่าน CSS class 'img-mobile' */}
        <div className="detail-image-wrapper" onClick={() => setSelectedImg(proj1mimage)}>
          <img src={proj1mimage} alt="Mobile App" className="img-clickable img-mobile" />
          <p className="image-caption">Mobile Application (Flutter)</p>
        </div>
      </div>

      <div className="detail-content">
        <section className="info-section">
          <h2>Overview</h2>
          <p>
            โปรเจคนี้เป็นส่วนหนึ่งของ เอกเทศ Independent Study (IS) 
            โดยเป็นการพัฒนาระบบจัดการคาเฟ่แบบครบวงจร
          </p>
        </section>

        <div className="tech-specs-grid">
          <section className="info-section">
            <h2>Development Stack</h2>
            <ul className="tech-list">
              <li><strong>Frontend:</strong> Flutter (Mobile), PHP (Web)</li>
              <li><strong>Backend:</strong> Laravel Framework</li>
              <li><strong>Database:</strong> Supabase / MySQL</li>
              <li><strong>Tools:</strong> ImageKit, Git, Tailwind CSS</li>
            </ul>
          </section>

          <section className="info-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              <li>ระบบสั่งอาหารและจัดการออเดอร์แบบ Real-time</li>
              <li>ระบบจัดการสต็อกสินค้าและสมาชิก</li>
              <li>รายงานสรุปยอดขายผ่าน Dashboard</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;