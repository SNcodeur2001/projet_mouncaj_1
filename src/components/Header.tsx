import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Services', path: '/services' },
  { label: 'Domaines de Placement', path: '/domaines-placement' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-[0px_4px_20px_rgba(8,31,77,0.05)] h-20">
      <div className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-full">
        <Link to="/" className="font-h3-desktop text-h3-desktop font-extrabold text-primary">
          MOUNCAJ
        </Link>
        <nav className="hidden md:flex items-center gap-stack-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-button-text text-button-text ${
                  isActive
                    ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                    : 'text-primary font-medium hover:text-secondary transition-colors duration-200'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-gutter">
          <button className="bg-secondary-container text-white px-8 py-3 rounded-xl font-button-text text-button-text hover:bg-secondary transition-transform active:scale-95 shadow-lg shadow-secondary-container/20">
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  )
}

