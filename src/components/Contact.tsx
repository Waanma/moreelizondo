'use client';
import { FC, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { IconCheck, IconLoader2 } from '@tabler/icons-react';

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setSubmitted(true);

    // Resetear después de 5 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 gradient-bg">
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-text)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trabajemos{' '}
          <span className="text-indigo-600 dark:text-indigo-400">juntos</span>
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 magic-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCheck className="h-8 w-8 text-green-500" />
              </div>
              <h3
                className="text-2xl font-bold mb-2 text-white"
              >
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gracias por contactarme. Te responderé pronto.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-white"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg border text-white border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-white"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg border text-white border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <IconLoader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Enviando...
                  </span>
                ) : (
                  'Enviar mensaje'
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
