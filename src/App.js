import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Works from './pages/Works';
import Photogallery from './pages/Photogallery.js';
import NewsAndEvents from './pages/NewsAndEvents';
import Handwritings from './pages/Handwritings.js';

function App() {
  return (
    <Router>
      <div className="bg-vintage-brown-100 min-h-screen text-vintage-brown-900 font-serif bg-old-paper">
        <nav className="p-6 bg-vintage-brown-700 shadow-md text-white">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-vintage-brown-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/news-and-events" className="hover:text-vintage-brown-300 transition">News and Events</Link>
            </li>
            <li>
              <Link to="/biography" className="hover:text-vintage-brown-300 transition">Biography</Link>
            </li>
            <li>
              <Link to="/works" className="hover:text-vintage-brown-300 transition">Works</Link>
            </li>
            <li>
              <Link to="/Handwritings" className="hover:text-vintage-brown-300 transition">Handwritings</Link>
            </li>
            <li>
              <Link to="/Photogallery" className="hover:text-vintage-brown-300 transition">Photogallery</Link>
            </li>
          </ul>
        </nav>
        <div className="p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/works" element={<Works />} />
            <Route path="/Photogallery" element={<Photogallery />} />
            <Route path="/Handwritings" element={<Handwritings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
