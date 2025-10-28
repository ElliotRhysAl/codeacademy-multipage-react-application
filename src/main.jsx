import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import './style.css'
import Footer from './components/Sections/Footer.jsx'
import Landing from './Screens/Landing/Landing.jsx'
import Terms from './Screens/Terms/Terms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <div className="flex-grow pt-16 pb-[8rem] md:pb-[4rem]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
