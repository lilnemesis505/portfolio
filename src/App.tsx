import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import ProjectDetail from './pages/ProjectDetail'; // ไฟล์ใหม่ที่จะสร้าง

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* หน้าแรกที่มีทั้ง Hero และ Projects */}
          <Route path="/" element={
            <>
              <Hero />
              <Project />
            </>
          } />
          
          {/* หน้าแสดงรายละเอียดโปรเจคแยกต่างหาก */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
// ต่อท้ายไฟล์ App.tsx
export default App;
