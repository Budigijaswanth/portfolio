'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// DataPoint component for digital particle animation
const DataPoint = ({ size, color, top, left, delay, type }: { 
  size: number; 
  color: string; 
  top: string; 
  left: string; 
  delay: number;
  type: 'circle' | 'square' | 'digit' | 'pulse'
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, left, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.7, 0], 
        scale: type === 'pulse' ? [0, 1.5, 0] : [0, 1, 0],
      }}
      transition={{ 
        duration: type === 'pulse' ? 3 : 2,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + (type === 'pulse' ? 8 : 3)
      }}
    >
      {type === 'circle' && (
        <div className="w-full h-full rounded-full bg-current" style={{ color }} />
      )}
      {type === 'square' && (
        <div className="w-full h-full bg-current" style={{ color }} />
      )}
      {type === 'digit' && (
        <div className="w-full h-full flex items-center justify-center text-xs font-mono" style={{ color }}>
          {Math.floor(Math.random() * 2)}
        </div>
      )}
      {type === 'pulse' && (
        <div className="w-full h-full rounded-full border border-current" style={{ color }} />
      )}
    </motion.div>
  );
};

// Grid line component
const GridLine = ({ horizontal, position, length, delay }: { 
  horizontal: boolean; 
  position: string; 
  length: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="absolute bg-blue-500/10 dark:bg-blue-400/5"
      style={horizontal 
        ? { top: position, left: 0, height: '1px', width: length } 
        : { left: position, top: 0, width: '1px', height: length }
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate data points
  const dataPoints = Array.from({ length: 50 }).map((_, i) => {
    const types = ['circle', 'square', 'digit', 'pulse'] as const;
    const type = types[i % types.length];
    return {
      id: i,
      size: type === 'digit' ? 20 : Math.random() * 8 + (type === 'pulse' ? 30 : 3),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      color: i % 4 === 0 ? 'rgba(var(--color-primary-rgb), 0.4)' : 
             i % 4 === 1 ? 'rgba(var(--color-secondary-rgb), 0.4)' : 
             i % 4 === 2 ? 'rgba(56, 189, 248, 0.4)' :
             'rgba(var(--color-accent-rgb), 0.4)',
      type
    };
  });

  // Generate grid lines
  const gridLines = [
    ...[10, 30, 50, 70, 90].map((pos, i) => ({ 
      horizontal: true, 
      position: `${pos}%`, 
      length: '100%',
      delay: i * 1.2
    })),
    ...[15, 35, 55, 75, 95].map((pos, i) => ({ 
      horizontal: false, 
      position: `${pos}%`, 
      length: '100%',
      delay: i * 1.2 + 0.6
    }))
  ];

  return (
    <section className="relative min-h-screen flex items-center py-16 sm:py-24 px-4 overflow-hidden">
      {/* Data-Driven Automation Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mounted && (
          <>
            {/* Base gradient with tech colors */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-transparent to-indigo-50/30 dark:from-sky-950/50 dark:via-blue-900/10 dark:to-indigo-950/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Grid lines for tech/data feel */}
            {gridLines.map((line, i) => (
              <GridLine 
                key={i}
                horizontal={line.horizontal}
                position={line.position}
                length={line.length}
                delay={line.delay}
              />
            ))}
            
            {/* Digital data points */}
            {dataPoints.map((point) => (
              <DataPoint 
                key={point.id}
                size={point.size}
                color={point.color}
                top={point.top}
                left={point.left}
                delay={point.delay}
                type={point.type}
              />
            ))}
            
            {/* Digital/data floating elements */}
            <motion.div
              className="absolute w-[30px] h-[30px] border-2 border-blue-400/20 dark:border-blue-400/10"
              style={{ top: '25%', left: '15%' }}
              animate={{
                rotate: 360,
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="absolute w-[50px] h-[50px] border-2 border-primary/20 rounded-full"
              style={{ bottom: '30%', right: '15%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: 360
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Network nodes */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M10,30 Q30,50 50,20 T90,40"
                  stroke="rgba(var(--color-primary-rgb), 0.6)"
                  strokeWidth="0.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 10, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.path
                  d="M20,70 Q40,40 60,80 T80,50"
                  stroke="rgba(var(--color-accent-rgb), 0.6)"
                  strokeWidth="0.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 12, repeat: Infinity, repeatDelay: 2, delay: 2 }}
                />
                <motion.path
                  d="M5,50 Q25,20 45,60 T95,30"
                  stroke="rgba(56, 189, 248, 0.6)"
                  strokeWidth="0.2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 15, repeat: Infinity, repeatDelay: 1, delay: 4 }}
                />
              </svg>
            </div>
            
            {/* Tech code-like pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/5 dark:to-blue-900/10" />
          </>
        )}
        
        {/* Optional: keep the video with reduced opacity for added texture */}
        <video
          className="absolute inset-0 min-w-full min-h-full object-cover opacity-10 mix-blend-screen dark:mix-blend-multiply"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                <motion.span 
                  className="block text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Hi, I'm
                </motion.span>
                <span className="block text-gray-900 dark:text-white">Jaswanth Budigi</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
                Business Analytics Professional
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                A passionate Business Analytics professional with expertise in data analysis, machine learning, and mechanical engineering.
                Dedicated to transforming data into actionable insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View My Work <FiArrowRight className="ml-2" />
                </motion.span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiMail className="mr-2" /> Contact Me
                </motion.span>
              </Link>
              <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiFileText className="mr-2" /> View Resume
                </motion.span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex justify-center lg:justify-start space-x-6"
            >
              <SocialIcon href="https://github.com/Budigijaswanth" icon={
                <motion.svg 
                  height="22" 
                  width="22" 
                  aria-hidden="true" 
                  viewBox="0 0 16 16" 
                  className="dark:fill-gray-300 fill-gray-700 hover:fill-primary"
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </motion.svg>
              } />
              <SocialIcon 
                href="https://www.linkedin.com/in/jaswanth-reddy-budigi" 
                icon={
                  <motion.div whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}>
                    <FiLinkedin size={22} className="text-blue-700" />
                  </motion.div>
                } 
              />
              <SocialIcon 
                href="https://twitter.com/yourusername" 
                icon={
                  <motion.div whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}>
                    <FiTwitter size={22} className="text-blue-400" />
                  </motion.div>
                } 
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-[300px] mx-auto aspect-square"
          >
            {/* Tech glow effect behind profile */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-primary/20 to-sky-400/20 dark:from-blue-600/30 dark:via-primary/30 dark:to-sky-500/30 blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-lg"
            >
              <Image
                src="/images/profile 1.jpg"
                alt="Jaswanth Budigi"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Tech-themed decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-blue-400/30 backdrop-blur-sm"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 5, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            <motion.div
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-sky-500/30 backdrop-blur-sm"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -5, 0],
                y: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Digital data stream effect */}
            <motion.div
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
              animate={{
                scaleX: [0, 3, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
} 