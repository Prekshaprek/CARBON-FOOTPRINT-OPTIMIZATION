import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Menu, X, TrendingUp, BookOpen, BarChart4, Home } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/" 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf 
              className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'} animate-leaf-sway`} 
              strokeWidth={2} 
            />
            <span 
              className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              EcoLogistics
            </span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', href: '#', icon: Home },
              { name: 'Optimizer', href: '#optimizer', icon: TrendingUp },
              { name: 'Statistics', href: '#statistics', icon: BarChart4 },
              { name: 'Resources', href: '#resources', icon: BookOpen }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-text hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-text' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {[
              { name: 'Home', href: '#', icon: Home },
              { name: 'Optimizer', href: '#optimizer', icon: TrendingUp },
              { name: 'Statistics', href: '#statistics', icon: BarChart4 },
              { name: 'Resources', href: '#resources', icon: BookOpen }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 text-text hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;