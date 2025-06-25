'use client';
import { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type LightboxProps = {
  images: string[];
  index: number;
  onClose: () => void;
};

const Lightbox: FC<LightboxProps> = ({ images, index, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={images[index]}
          alt={`Lightbox ${index + 1}`}
          className="max-w-full max-h-full rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 120 }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
