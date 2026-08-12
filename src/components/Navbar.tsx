import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/myths', label: 'Myths & Truths' },
  { to: '/events', label: 'Events' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 gap-8">
      <NavLink to="/">
        <img
          src="/assets/White + Transparent.png"
          alt="SOCC logo"
            className="h-32 w-32 rounded-sm object-cover"
        />
      </NavLink>
      <nav className="flex justify-center gap-16">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              ['text-xl font-semibold transition-colors drop-shadow-lg', isActive ? 'text-socc-gold' : 'text-zinc-300 hover:text-zinc-100'].join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
