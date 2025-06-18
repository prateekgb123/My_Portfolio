import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyle = "text-white hover:text-yellow-300 transition duration-300";
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <header className='sticky top-0 z-50'>
      <nav className="flex justify-between items-center py-4 md:py-6 px-6 md:px-12 bg-gradient-to-r from-indigo-600 to-purple-700 shadow-lg">
        <div className="text-xl md:text-4xl font-extrabold tracking-tight text-white hover:scale-105 transition-transform duration-300">
          <Link to='/'>✨ Prateek G Ballari</Link>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className={`${navStyle} ${location.pathname === link.path ? 'underline underline-offset-4' : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-lg flex items-center">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} color="#fff" />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`${navStyle} ${location.pathname === link.path ? 'underline underline-offset-4' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
