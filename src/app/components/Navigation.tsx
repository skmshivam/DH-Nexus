import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DHNexusLogo } from './DHNexusLogo';

// First 6 items appear in the visible nav bar. Rest go in "More" dropdown.
const navItems = [
  { id: 'home',       label: 'Home',        path: '/' },
  { id: 'about',      label: 'About',       path: '/about' },
  { id: 'what-is-dh', label: 'What is DH?', path: '/what-is-dh' },
  { id: 'programs',   label: 'Programs',    path: '/global-dh' },
  { id: 'talent',     label: 'Talent',      path: '/talent-directory' },
  { id: 'events',     label: 'Events',      path: '/events' },
];

const moreItems = [
  { id: 'hire',       label: 'For Recruiters',  path: '/for-recruiters' },
  { id: 'map',        label: 'Interactive Map',  path: '/interactive-map' },
  { id: 'resources',  label: 'Resources',        path: '/resources' },
  { id: 'careers',    label: 'Career Resources', path: '/career-resources' },
  { id: 'mentorship', label: 'Mentorship',       path: '/mentorship' },
  { id: 'research',   label: 'Research',         path: '/research' },
  { id: 'industry',   label: 'Industry',         path: '/industry' },
  { id: 'timeline',   label: 'DH Timeline',      path: '/timeline' },
  { id: 'impact',     label: 'Impact Stories',   path: '/success-stories' },
  { id: 'community',  label: 'Community',        path: '/team' },
  { id: 'help',       label: 'Help Us Build',    path: '/help-build' },
  { id: 'contact',    label: 'Contact',          path: '/contact' },
];

const allItems = [...navItems, ...moreItems];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <DHNexusLogo variant="navigation" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium"
                aria-label="More menu options"
                aria-haspopup="true"
              >
                More ▾
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                        isActive(item.path)
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 max-h-[70vh] overflow-y-auto">
            <div className="space-y-1">
              {allItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
