import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import './style.css'
import './index.css'
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <Nav />
      <div className="pt-16">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* Fallback route for 404 Not Found */}
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
