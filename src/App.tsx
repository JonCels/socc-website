import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MythsAndTruths from './pages/MythsAndTruths'
import Events from './pages/Events'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-socc-dark text-zinc-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myths" element={<MythsAndTruths />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
