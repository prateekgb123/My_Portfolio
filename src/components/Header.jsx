// src/components/Header.js
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navStyle = "text-black hover:text-blue-600";
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
  ];
  return (
    <header className='sticky top-0'>
      <nav className="flex justify-between items-center py-4 md:py-12 px-6 md:px-12 bg-white shadow-md md:shadow-none">
        <div className="text-lg md:text-2xl font-bold"><Link to='/'>Prateek G Ballari</Link></div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className={`${navStyle} ${location.pathname === link.path ? 'font-semibold' : ''}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-lg flex items-center ">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={toggleMenu} className={`${navStyle} ${location.pathname === link.path ? 'font-semibold' : ''}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
