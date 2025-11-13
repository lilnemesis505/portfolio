
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'; // ไฟล์ CSS หลักสำหรับคุมธีม (เช่น Dark Mode)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;