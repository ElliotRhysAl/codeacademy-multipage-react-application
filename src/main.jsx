import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import './style.css'
import Landing from './Screens/Landing/Landing.jsx'
import Terms from './Screens/Terms/Terms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Terms" element={<Terms />} />
          {/* Fallback route for 404 Not Found */}
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
