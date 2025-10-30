import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './screens/Landing/Landing.jsx'
import Footer from './components/Sections/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>  
      <div className="flex-grow pt-16 pb-[8rem] md:pb-[4rem]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}