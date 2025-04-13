import React from 'react';

const NavLinks = ({ links }) => {
  return (
    <ul 
    className=
    "flex flex-col md:flex-row items-center md:gap-x-12 gap-y-4"
    >
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className=
            {`text-white hover:text-[#B8336A] text-base font-medium ${link.isPrimary ?
             'inline-block py-2.5 px-8 bg-[#B8336A] rounded-full hover:bg-[#b8336ad8] transition-colors'
              : ''}`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;