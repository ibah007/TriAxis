import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png"
              alt="Tri/Axis Logo"
              className="h-20 w-20 mr-2 object-contain"/>
              <span className="font-poppins  text-customBlue dark:tecustomBlue font-bold text-sm">TriAxis Technologies</span>
            </div>
            {/* <p className="mb-4 text-gray-400">ONE STOP SOLUTIONS FOR ALL YOUR ENGINEERING NEEDS</p> */}
            <div className="flex justify-center items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-customBlue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-customBlue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-customBlue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-customBlue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-customBlue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-customBlue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-customBlue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {/* <li>
                <Link to="/services" className="text-gray-400 hover:text-customBlue transition-colors">Construction</Link>
              </li> */}
              <li>
                <Link to="/services" className="text-gray-400 hover:text-customBlue transition-colors">RF & Communication</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-customBlue transition-colors">Electrical & Electronics</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-customBlue transition-colors">Software Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-customBlue mt-1 flex-shrink-0" />
                <span className="text-gray-400">Rohtas Complex, Mansehra Road, Abbottabad</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-customBlue mt-1 flex-shrink-0" />
                <span className="text-gray-400">Rohtas Complex, Mansehra Road, Abbottabad</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-customBlue flex-shrink-0" />
                <span className="text-gray-400">+92 336 0543553</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-customBlue flex-shrink-0" />
                <a href="mailto:info@triaxistech.com" className="text-gray-400 hover:text-customBlue transition-colors">info@triaxistech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center tecustomBlue">
          <p>&copy; {new Date().getFullYear()} TriAxis Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;