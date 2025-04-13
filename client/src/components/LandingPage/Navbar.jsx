'use client'
import {useState} from 'react';
import { Menu, X } from 'lucide-react';
import LogoImage from '@images/logo.png'
import NavLinks from '@lib/NavLinks.jsx';


const Logo = ({ logo, text }) => (
  <div className="flex items-center">
    {logo ? (
      <img src={logo} alt="logo" className="h-8 w-auto" />
    ) : (
      <div className="h-8 w-8 bg-white rounded-full" />
    )}
    <a href="/" className="flex items-center">
      <span className="text-3xl font-black text-white">{text}</span>
    </a>
  </div>
);

const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center
       p-2 w-10 h-10 justify-center 
       text-sm rounded-lg md:hidden 
       text-white hover:bg-white/10 
       focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="sr-only">Open main menu</span>
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

const links = [
  { href: '#about', text: 'About' },
  { href: '#officials', text: 'Officials' },
  { href: '#discover', text: 'Discover' },
  { href: '#location', text: 'Location' },
  { href: '#signup', text: 'Signup', isPrimary: true },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 sticky w-full top-0 z-50">
      <nav 
      className="max-w-3xl mx-auto bg-white/25 
      backdrop-blur-[30px] border border-gray-400
       rounded-full">

        <div 
        className="flex flex-wrap 
        items-center justify-between 
        gap-4 px-8 py-4">

          {/* Logo */}
          <Logo 
          logo={LogoImage} 
          text="SKC" 
          />

          {/* Mobile menu button */}
          <MenuButton 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          />

          {/* Navigation items */}
          <div
            className=
            {`${isMenuOpen ? 'block' : 'hidden'
              } md:block absolute md:static left-0 right-0 top-full mt-2 md:mt-0 
              bg-[#1e3c72]/90 md:bg-transparent rounded-2xl md:rounded-none p-4 
              md:p-0 mx-4 md:mx-0`}
          >
            <NavLinks 
            links={links} 
            />

          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;