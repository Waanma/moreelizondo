'use client';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

export type GalleryProps = {
  images: string[];
};

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'procreate', name: 'Procreate' },
    { id: 'mural', name: 'Murales' },
  ];

  return (
    <section className="py-20 px-4 gradient-bg" id="gallery">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-text)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mi Galería
        </motion.h2>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Galería */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(i)}
            >
              <div className="overflow-hidden rounded-xl shadow-lg magic-border">
                <motion.img
                  src={src}
                  alt={`Ilustración ${i + 1}`}
                  className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Lightbox
            images={images}
            index={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
