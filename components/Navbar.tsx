'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiUser, FiCode, FiAward, FiMail, FiCodesandbox } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const logoControls = useAnimation();

  useEffect(() => {
    setMounted(true);
    
    // Animate logo on load
    const animateLogo = async () => {
      await logoControls.start({ 
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 1.5 }
      });
      
      // Loop the animation every 5 seconds
      setTimeout(animateLogo, 5000);
    };
    
    animateLogo();
  }, [logoControls]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const themeToggleVariants = {
    initial: { scale: 0.8, rotate: 0 },
    animate: { scale: 1, rotate: 360, transition: { duration: 0.5 } },
  };

  return (
    <motion.header 
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center">
              <motion.div
                animate={logoControls}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <FiCodesandbox className="mr-2 text-primary drop-shadow-md" size={28} strokeWidth={2.5} />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                My Portfolio
              </motion.span>
            </Link>
          </div>

          {/* Desktop menu */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <NavLink href="#about">
                <FiUser className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                About
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink href="#projects">
                <FiCode className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                Projects
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink href="#skills">
                <FiAward className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                Skills
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink href="#contact">
                <FiMail className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                Contact
              </NavLink>
            </motion.div>
            
            {/* Theme Toggle Button */}
            <motion.div variants={itemVariants}>
              <motion.button 
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {mounted && theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      variants={themeToggleVariants}
                      initial="initial"
                      animate="animate"
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      <FiSun size={20} strokeWidth={2.5} />
                    </motion.div>
                  ) : mounted ? (
                    <motion.div
                      key="moon"
                      variants={themeToggleVariants}
                      initial="initial"
                      animate="animate"
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      <FiMoon size={20} strokeWidth={2.5} />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle Button (mobile) */}
            <motion.button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mounted && theme === 'dark' ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiSun size={20} strokeWidth={2.5} />
                  </motion.div>
                ) : mounted ? (
                  <motion.div
                    key="moon-mobile"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMoon size={20} strokeWidth={2.5} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="text-gray-700 dark:text-gray-200 p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX size={24} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu size={24} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
              variants={navbarVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} custom={0}>
                <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
                  <FiUser className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                  About
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants} custom={1}>
                <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
                  <FiCode className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                  Projects
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants} custom={2}>
                <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
                  <FiAward className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                  Skills
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants} custom={3}>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                  <FiMail className="inline mr-2 text-primary" strokeWidth={2.5} /> 
                  Contact
                </MobileNavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.div
        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary font-medium"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 } 
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div 
        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-secondary dark:hover:text-primary rounded-md"
        whileHover={{ 
          x: 5,
          backgroundColor: 'rgba(var(--color-secondary-rgb), 0.1)' 
        }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    </Link>
  );
} 