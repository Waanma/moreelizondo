'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const About: FC = () => (
  <section className="py-20 px-4 gradient-bg">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="magic-border p-1 rounded-2xl">
            <img
              src="./images/2.jpg"
              alt="Morena Elizondo"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Aplicar la variable CSS directamente con style */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Sobre{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Morena</span>
          </h2>

          {/* También aplicado a los párrafos */}
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Ilustradora digital con más de 14 años de experiencia en muralismo.
            Especialista en Procreate, creando mundos llenos de color y detalle.
          </p>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Mi trabajo fusiona técnicas tradicionales con tecnología digital
            para crear piezas únicas que cuentan historias visuales.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Procreate', 'Photoshop', 'Illustrator', 'Muralismo'].map(
              (skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
