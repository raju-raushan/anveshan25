import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logoImage from './assets/SAGElogo.png';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          // FIX: Used standard Tailwind classes for a dark, translucent look
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700 shadow-xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* FIX: Replaced invalid 'mx-none' with 'mx-auto' for centering, and reduced padding a bit (py-3) */}
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* FIX: Decreased logo size (w-24/w-32) and removed invalid 'h-22' class */}
            <div className="relative w-24 h-auto md:w-32">
              <div className="absolute top-0 left-0 w-full h-full">
                <img 
                  src={logoImage} 
                  alt="Glowing Logo" 
                  className="w-12 h-12 opacity-50"
                />
              </div>

              <img 
                src={logoImage} 
                alt="Logo" 
                className="relative w-12 h-12"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors duration-200 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-surface-elevated"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // FIX: Used standard Tailwind classes for dark, translucent look
              className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground/80 hover:text-foreground py-2 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-tech transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;