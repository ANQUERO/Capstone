import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', text: 'About' },
  { href: '#officials', text: 'Officials' },
  { href: '#discover', text: 'Discover' },
  { href: '#location', text: 'Location' },
  { href: '#signup', text: 'Sign Up', isPrimary: true },
]

const NavLinks = ({ links, onClick }) => (
  <ul className="flex flex-col md:flex-row items-center md:gap-x-12 gap-y-4">
    {links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          onClick={onClick}
          className={`
            text-base font-medium
            ${
              link.isPrimary
                ? 'inline-block py-2.5 px-8 bg-[#B8336A] text-white rounded-full hover:bg-[#b8336ad8] transition-colors'
                : 'text-white hover:text-[#B8336A] transition-colors'
            }
          `}
        >
          {link.text}
        </a>
      </li>
    ))}
  </ul>
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky p-4 w-full top-0 z-50 bg-[#31578B]"
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div id='hero' className="text-white text-2xl font-bold">SKC</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavLinks links={links} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-[#31578B] py-6 px-4 md:hidden z-40"
            >
              <NavLinks links={links} onClick={() => setIsMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar
