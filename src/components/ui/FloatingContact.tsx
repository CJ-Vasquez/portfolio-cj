import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Mail, Calendar, X } from 'lucide-react';
import { useState } from 'react';

interface FloatingContactProps {
  onOpenModal: () => void;
}

const contactOptions = [
  {
    icon: MessageSquare,
    label: 'Mensaje',
    action: 'modal',
    gradient: 'from-cyan-500 to-blue-500',
    hoverShadow: 'hover:shadow-cyan-500/50'
  },
  {
    icon: Calendar,
    label: 'Agenda',
    action: 'https://calendly.com/username',
    gradient: 'from-orange-500 to-amber-500',
    hoverShadow: 'hover:shadow-orange-500/50'
  },
  {
    icon: Mail,
    label: 'Email',
    action: 'mailto:hola@tudominio.com',
    gradient: 'from-purple-500 to-pink-500',
    hoverShadow: 'hover:shadow-purple-500/50'
  },
  {
    icon: Phone,
    label: 'Llamar',
    action: 'tel:+34123456789',
    gradient: 'from-green-500 to-emerald-500',
    hoverShadow: 'hover:shadow-green-500/50'
  }
];

export function FloatingContact({ onOpenModal }: FloatingContactProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionClick = (action: string) => {
    if (action === 'modal') {
      onOpenModal();
    } else if (action.startsWith('http')) {
      window.open(action, '_blank');
    } else {
      window.location.href = action;
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Overlay cuando está expandido */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <div className="relative flex flex-col-reverse items-end gap-3">
          
          {/* Opciones expandibles */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col-reverse gap-3"
              >
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.label}
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        transition: {
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: 50, 
                        scale: 0.8,
                        transition: { delay: (contactOptions.length - index) * 0.03 }
                      }}
                      className="flex items-center gap-3"
                    >
                      {/* Label */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.05 + index * 0.05 }}
                        className="px-4 py-2 bg-slate-900/90 backdrop-blur-xl text-slate-100 text-sm font-medium rounded-xl shadow-lg border border-white/10 whitespace-nowrap"
                      >
                        {option.label}
                      </motion.div>

                      {/* Button */}
                      <motion.button
                        onClick={() => handleOptionClick(option.action)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-14 h-14 bg-gradient-to-br ${option.gradient} rounded-full flex items-center justify-center shadow-xl ${option.hoverShadow} hover:shadow-2xl transition-all duration-300 border-2 border-white/20`}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button - Rediseñado */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 rounded-full overflow-hidden group"
            aria-label={isExpanded ? 'Cerrar menú de contacto' : 'Abrir menú de contacto'}
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl rounded-full border-2 border-white/10" />
            
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-90"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />
            
            {/* Icon Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageSquare className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pulse Ring Animation */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}
