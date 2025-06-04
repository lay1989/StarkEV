import React, { useState, useEffect } from 'react';
import { Menu, X, Power, MessageCircle, Zap } from 'lucide-react';
import VoiceCommandModal from '../ui/VoiceCommandModal';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleVoiceModal = () => setIsVoiceModalOpen(!isVoiceModalOpen);

  const navItems = [
    { name: 'Models', href: '#models' },
    { name: 'Technology', href: '#technology' },
    { name: 'Features', href: '#features' },
    { name: 'Specifications', href: '#specs' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-space-black/80 backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative mr-2">
            <Zap className="text-electric-blue w-8 h-8" />
            <div className="absolute inset-0 bg-electric-blue/20 rounded-full animate-pulse-glow"></div>
          </div>
          <h1 className="font-stark text-2xl tracking-wider">STARK EV</h1>
          <span className="text-xs font-tech text-electric-blue ml-2 opacity-80">MARK I</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-reactor-white hover:text-electric-blue transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <motion.button
            onClick={toggleVoiceModal}
            className="flex items-center space-x-2 px-4 py-2 rounded holographic text-electric-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={16} />
            <span className="font-tech text-sm">J.A.R.V.I.S.</span>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleVoiceModal}
            className="mr-4"
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="text-electric-blue w-6 h-6" />
          </motion.button>
          
          <button onClick={toggleMenu} className="text-reactor-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 w-full bg-dark-blue/90 backdrop-blur-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-reactor-white hover:text-electric-blue py-2 border-b border-electric-blue/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Voice Command Modal */}
      {isVoiceModalOpen && (
        <VoiceCommandModal onClose={toggleVoiceModal} />
      )}
    </header>
  );
};

export default Header;