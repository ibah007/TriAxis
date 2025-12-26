import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  const menuRef = useRef();
  const buttonRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container h-20 mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Tri/Axis Logo" className="h-20 w-20 mr-2 object-contain" />
            <span className="font-poppins font-bold text-customBlue dark:text-customBlue text-xl">TriAxis Technologies</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link text-customBlue dark:text-customBlue no-underline decoration-none transition-all duration-200 transform ${
                      isActive
                        ? 'font-bold text-[1.08rem]'
                        : 'hover:text-customBlue dark:hover:text-blue-400 hover:scale-125'
                    }`
                  }




                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => dispatch(toggleDarkMode())}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              ref={buttonRef}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          ref={menuRef}
          className="md:hidden bg-white dark:bg-dark shadow-lg fixed inset-x-0 top-16 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `block py-2 ${isActive ? 'text-customBlue font-medium' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
              <span className="mr-3 text-sm">Theme:</span>
              <button
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                onClick={() => dispatch(toggleDarkMode())}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
