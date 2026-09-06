import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/myths', label: 'Myths & Facts' },
  { to: '/events', label: 'Events' },
  { to: '/merch', label: 'Merch' },
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
      <nav className="flex flex-wrap justify-center gap-x-16 gap-y-3 px-4">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              ['font-title text-xl tracking-wide transition-colors drop-shadow-lg', isActive ? 'text-socc-gold' : 'text-socc-bone hover:text-socc-white'].join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
