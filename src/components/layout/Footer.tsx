import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, Github , Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-dark-blue"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="relative mr-2">
                <Zap className="text-electric-blue w-8 h-8" />
                <div className="absolute inset-0 bg-electric-blue/20 rounded-full animate-pulse-glow"></div>
              </div>
              <h1 className="font-stark text-2xl tracking-wider">STARK EV</h1>
              <span className="text-xs font-tech text-electric-blue ml-2 opacity-80">MARK I</span>
            </div>
            <p className="text-reactor-white/60 max-w-xs mx-auto lg:mx-0">
              Revolutionizing transportation with clean energy and advanced technology.
              Powered by Stark Industries.
            </p>
            
            <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
              <motion.a 
                href="https://github.com/lay1989" 
                className="w-8 h-8 rounded-full bg-space-black flex items-center justify-center text-electric-blue"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 132, 255, 0.2)' }}
              >
                <Github  size={16} />
              </motion.a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-stark text-electric-blue mb-4">VEHICLES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">MARK I</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">MARK VII</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">HULK BUSTER</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-stark text-electric-blue mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">About</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Careers</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Investors</a></li>
                <li><a href="#" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Sustainability</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-stark text-electric-blue mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><a href="tel:+919099340548" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Contact</a></li>
                <li><a href="mailto:layshah1989@gmail.com" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Email</a></li>
                <li><a href="https://github.com/lay1989" className="text-reactor-white/70 hover:text-electric-blue transition-colors">Github</a></li>
                <li><a href="https://wa.me/+919099340548" className="text-reactor-white/70 hover:text-electric-blue transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-electric-blue/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-reactor-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stark Industries. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-reactor-white/50 text-sm hover:text-electric-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-reactor-white/50 text-sm hover:text-electric-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-reactor-white/50 text-sm hover:text-electric-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-reactor-white/30 text-xs font-tech">
            <span className="text-electric-blue/50">$</span> whoami
            <span className="ml-2">Lay Shah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;