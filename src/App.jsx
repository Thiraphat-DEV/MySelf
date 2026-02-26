import './App.css';
import Home from './components/Content/Home.jsx'
import About from './components/Content/About.jsx'
import Education from './components/Content/Education.jsx'
import Skills from './components/Content/Skills.jsx'
import Contact from './components/Content/Contact.jsx'
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
