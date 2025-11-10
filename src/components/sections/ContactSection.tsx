import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useAdvancedEffects';

// Información de contacto - TUS DATOS REALES DEL CV
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ciro.vm92@gmail.com',
    href: 'mailto:ciro.vm92@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+51 933 055 687',
    href: 'tel:+51933055687',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Lima, Perú',
    href: '#',
  },
];

// Redes sociales - TUS ENLACES REALES
const socialMedia = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/CJ-Vasquez',
    color: 'hover:text-gray-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/cj-vasquez',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/CJVasquezDev',
    color: 'hover:text-sky-400',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ciro.vm92@gmail.com',
    color: 'hover:text-red-400',
  },
];

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Aquí integrarías con tu servicio de email (EmailJS, Formspree, etc.)
    alert('¡Mensaje enviado correctamente! Te responderé pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Hablemos
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer tus ideas y 
            ayudarte a hacerlas realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna izquierda: Información de contacto y redes sociales */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Información de contacto */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-100 mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-700 transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{info.label}</div>
                        <div className="text-slate-100 font-semibold group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-100 mb-8">
                Sígueme en Redes
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className={`flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 text-slate-300 ${social.color} group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-100 mb-8">
                Envíame un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Email en una fila */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
