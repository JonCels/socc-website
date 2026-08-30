import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MythsAndTruths from './pages/MythsAndTruths'
import Events from './pages/Events'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/*
        Top overlay: solid dark behind the logo, then a short ~60px fade at the
        nav-link level so scrolling text disappears right as it hits the links —
        not well above them.
      */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-20"
        style={{
          height: '215px',
          background: 'linear-gradient(to bottom, #0f0e0d 0px, #0f0e0d 155px, transparent 250px)',
        }}
      />
      {/* Bottom overlay: fade content before it disappears behind the footer */}
      {/* Bottom fade: solid matches footer colour for ~90px (hidden behind it), then fades into content above */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-[180px]"
        style={{ background: 'linear-gradient(to top, #0a0a0a 0px, #0a0a0a 90px, transparent 180px)' }}
      />

      <div className="relative z-10 min-h-screen bg-socc-dark pb-24 text-zinc-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myths" element={<MythsAndTruths />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}
