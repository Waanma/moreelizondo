'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDark));
  };

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    updateTheme(newMode);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Modo claro' : 'Modo oscuro'}
    >
      {darkMode ? (
        <IconSun className="w-6 h-6 text-yellow-400" /> // Cambio aquí
      ) : (
        <IconMoon className="w-6 h-6 text-indigo-600" /> // Cambio aquí
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;
