'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';

const Footer: FC = () => (
  <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-6 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Morena Elizondo</h3>
          <p className="text-indigo-200 max-w-md">
            Creando mundos de color a través de la ilustración digital y el
            muralismo.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4">Conectemos</h4>
          <div className="flex space-x-4">
            {[
              {
                name: 'instagram',
                icon: <IconBrandInstagram size={24} />,
                url: 'https://www.instagram.com/moreh_eli/',
              },
              {
                name: 'linkedin',
                icon: <IconBrandLinkedin size={24} />,
                url: 'https://www.linkedin.com/in/moreelizondo/',
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ y: -5 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-indigo-700 mt-10 pt-6 text-center text-indigo-300 flex flex-row items-center justify-center gap-3">
        <p>
          © {new Date().getFullYear()} Juan Manuel Gallegos. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-row items-center justify-center gap-1">
          <p>Linkedin:</p>
          <a href="https://www.linkedin.com/in/juanmagallegos/" target="_blank">
            <IconBrandLinkedin size={34} />
          </a>
          <p>-</p>
          <p>Github:</p>
          <a href="https://github.com/Waanma" target="_blank">
            <IconBrandGithub size={34} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
