import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/myths', label: 'Myths & Facts', mobileLines: ['Myths &', 'Facts'] },
  { to: '/events', label: 'Events' },
  //{ to: '/merch', label: 'Merch' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center gap-3 px-3 pt-2 sm:gap-8 sm:pt-4">
      <NavLink to="/">
        <img
          src="/assets/socc-logo.png"
          alt="SOCC logo"
          className="h-20 w-20 rounded-sm object-cover sm:h-32 sm:w-32 2xl:h-36 2xl:w-36"
        />
      </NavLink>
      <nav className="flex flex-nowrap items-center justify-center gap-x-7 sm:gap-x-16 sm:px-4">
        {links.map(({ to, label, mobileLines }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              ['font-title text-sm tracking-wide transition-colors drop-shadow-lg sm:text-xl 2xl:text-2xl', isActive ? 'text-socc-gold' : 'text-socc-bone hover:text-socc-white'].join(' ')
            }
          >
            {mobileLines ? (
              <>
                <span className="hidden sm:inline">{label}</span>
                <span className="block text-center leading-tight sm:hidden">
                  {mobileLines[0]}
                  <br />
                  {mobileLines[1]}
                </span>
              </>
            ) : (
              label
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
