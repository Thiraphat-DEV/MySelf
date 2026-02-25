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
      <div className="flex w-screen min-h-screen">
        <Navbar />
        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
