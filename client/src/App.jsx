import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./screens/Landing/Landing.jsx"
import Portfolio from "./screens/Portfolio/Portfolio.jsx"
import Footer from "./components/Sections/Footer.jsx"

export default function App() {
  return (
    <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/404" element={<h1>Page Not Found</h1>} />
        </Routes>
        <div className="pb-36 sm:pb-24 md:pb-12"></div>
      <Footer />
    </BrowserRouter>
  )
}