import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteStopped from './pages/SiteStopped'

/*
// Original site pages (preserved for restoration when development resumes):
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
*/

function App() {
  return (
    <BrowserRouter>
      {/* Any URL entered will direct to the Site Development Stopped notice page */}
      <Routes>
        <Route path="*" element={<SiteStopped />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
