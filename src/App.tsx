import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MythsAndFacts from './pages/MythsAndTruths'
import Events from './pages/Events'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="relative z-10 min-h-screen bg-socc-black text-socc-bone">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myths" element={<MythsAndFacts />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}
