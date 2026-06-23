import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Explore' },
  { to: '/team', label: 'Team' },
  { to: '/impact', label: 'Impact' },
  { to: '/gallery', label: 'Events' },
  { to: '/contact', label: 'Contact' },
];

const frameworkItems = [
  { to: '/mission', label: 'Mission' },
  { to: '/value-chain', label: 'Value Chain' },
  { to: '/epr-models', label: 'EPR Models' },
  { to: '/mass-flows', label: 'Mass Flows' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false);

  const isFrameworkActive = frameworkItems.some((item) => item.to === location.pathname);
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "bg-white text-primary shadow-sm"
      : "text-white/74 hover:bg-white/10 hover:text-white";
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/18 bg-primary-container/52 px-3 py-2 text-white shadow-[0_18px_60px_rgba(0,23,14,0.18)] backdrop-blur-2xl supports-[backdrop-filter]:bg-primary-container/42">
        <Link to="/" className="group flex min-w-0 items-center rounded-full bg-white/94 p-1.5 text-primary shadow-sm transition-transform hover:scale-[1.01]">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white">
            <img src="/images/logo.png" alt="GASP logo" className="h-full w-full object-contain" />
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/8 p-1 xl:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsFrameworkOpen(true)}
            onMouseLeave={() => setIsFrameworkOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isFrameworkOpen}
              onClick={() => setIsFrameworkOpen((open) => !open)}
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-300 ${
                isFrameworkActive ? 'bg-white text-primary shadow-sm' : 'text-white/74 hover:bg-white/10 hover:text-white'
              }`}
            >
              Framework
              <ChevronDown className={`h-4 w-4 transition-transform ${isFrameworkOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isFrameworkOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-3xl border border-white/16 bg-primary-container/82 p-2 text-white shadow-[0_18px_60px_rgba(0,23,14,0.28)] backdrop-blur-2xl"
                >
                  {frameworkItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsFrameworkOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-sm font-bold transition-all ${isActive(item.to)}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-300 ${isActive(item.to)}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/partnerships" className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-fixed sm:inline-flex">
            Partner With Us
          </Link>
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/18 xl:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-white/16 bg-primary-container/76 p-3 text-white shadow-[0_18px_60px_rgba(0,23,14,0.26)] backdrop-blur-2xl xl:hidden"
          >
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/12 bg-white/8 p-2 sm:col-span-2">
                <div className="px-3 py-2 text-xs font-black uppercase text-white/48">Framework</div>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {frameworkItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-full px-4 py-3 text-sm font-bold transition-all ${isActive(item.to)}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-4 py-3 text-sm font-bold transition-all ${isActive(item.to)}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/partnerships" onClick={() => setIsOpen(false)} className="rounded-full bg-white px-4 py-3 text-sm font-black text-primary shadow-sm sm:hidden">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
