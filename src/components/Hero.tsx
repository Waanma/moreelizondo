'use client';
import { FC, MouseEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { IconArrowDown } from '@tabler/icons-react';

const Hero: FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    '#7e22ce',
    '#ec4899',
    '#3b82f6',
    '#10b981',
    '#f59e0b',
  ];

  const scrollToGallery = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animación cíclica de colores
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 gradient-bg relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-6 right-6 z-10">
        <ThemeSwitcher />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Morena Elizondo
        </h1>
        <motion.p
          className="text-xl md:text-2xl mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            color: colors[colorIndex],
            transition: 'color 1s ease-in-out',
          }}
        >
          Ilustradora digital • Procreate Lover
        </motion.p>
      </motion.div>

      <motion.div
        className="magic-border p-1 rounded-2xl shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src="./images/5.jpg"
          alt="Ilustración destacada"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl"
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      <motion.div
        className="mt-12 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={scrollToGallery}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2" style={{ color: 'var(--color-text)' }}>
            Ver galería
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <IconArrowDown className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
