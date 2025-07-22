
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { GiOverInfinity } from 'react-icons/gi';
import CommonButton from '../ui/CommonButton';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const services = [
    { name: 'AI Automation', path: '/services/ai-automation' },
    { name: 'n8n Workflow', path: '/services/n8n-workflow' },
    { name: 'AI Agent Development', path: '/services/ai-agent' },
    { name: 'Voice AI Development', path: '/services/voice-ai' },
    { name: 'Shopify AI Automation', path: '/services/shopify-ai' },
    { name: 'ChatBot Development', path: '/services/chatbot' },
    { name: 'Generative AI', path: '/services/generative-ai' },
  ];

  const NavLinks = ({ isMobile = false }) => {
    const handleMobileLinkClick = () => {
      if (isMobile) {
        closeMobileMenu();
      }
    };

    const linkClass = ({ isActive }) =>
      `block py-2 px-4 rounded-md transition-colors font-semibold ${
        isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
      } hover:text-[#00b8db] hover:bg-gray-100`;

    const serviceLinkClass = ({ isActive }) =>
      `block w-full text-left px-4 py-2 font-semibold text-sm rounded-md transition-colors ${
        isActive ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600'
      } hover:bg-gray-100 hover:text-[#00b8db]`;

    return (
      <>
        <NavLink to="/work" className={linkClass} onClick={handleMobileLinkClick}>Our Work</NavLink>
        
        {/* FIX #2: Desktop Services Dropdown Wrapper. The onMouseEnter/Leave events are on this parent div. */}
        <div
          className="relative"
          onMouseEnter={() => !isMobile && setDesktopServicesOpen(true)}
          onMouseLeave={() => !isMobile && setDesktopServicesOpen(false)}
        >
          <button
            onClick={() => isMobile && setMobileServicesOpen(!isMobileServicesOpen)}
            className="w-full flex justify-between items-center py-2 px-4 text-gray-700 font-semibold hover:text-[#00b8db] hover:bg-gray-100 rounded-md"
          >
            Services
            <FiChevronDown className={`ml-1 transition-transform duration-300 mt-1 ${isMobile && isMobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDesktopServicesOpen && !isMobile && (
             // The pt-4 on this div creates a "safe zone" so the mouse doesn't leave the parent when moving to the dropdown.
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-transparent pt-4">
                 <div className="bg-white rounded-lg shadow-xl p-2">
                    <ul className="space-y-1">
                        {services.map(service => (
                        <li key={service.name}>
                            <NavLink to={service.path} className={serviceLinkClass}>{service.name}</NavLink>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
          )}

          {isMobile && isMobileServicesOpen && (
            <div className="pl-4 mt-2 border-l-2 border-gray-200 ml-4">
              <ul className="space-y-1">
                {services.map(service => (
                  <li key={service.name}>
                    <NavLink to={service.path} className={serviceLinkClass} onClick={handleMobileLinkClick}>{service.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <NavLink to="/company" className={linkClass} onClick={handleMobileLinkClick}>Company</NavLink>
        <NavLink to="/blog" className={linkClass} onClick={handleMobileLinkClick}>Blog</NavLink>
      </>
    );
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center p-4">
          <NavLink to="/" className="flex items-center">
            <GiOverInfinity className="text-5xl text-[#00b8db]" />
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-2">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-4">
            <NavLink to="/quote">
              <CommonButton className="hidden sm:block">
                Get Free Quote
              </CommonButton>
            </NavLink>
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-2xl text-gray-700">
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
      >
        <div 
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Scrollable Content Area */}
          <div className="overflow-y-auto h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button onClick={closeMobileMenu} className="text-2xl text-gray-600"><FiX /></button>
            </div>
            <nav className="flex flex-col p-4">
              <NavLinks isMobile={true} />
              <NavLink to="/quote" className="w-full mt-4" onClick={closeMobileMenu}>
                <CommonButton className="w-full">
                  Get Free Quote
                </CommonButton>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;