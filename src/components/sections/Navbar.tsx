import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, User, Briefcase, Mail, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { useSmoothScroll } from '../../hooks/useAdvancedEffects';

const navItems = [
  { id: 'hero', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Sobre mí', icon: User },
  { id: 'personal', label: 'Fuera del código', icon: Heart },
  { id: 'experience', label: 'Experiencia', icon: Briefcase },
  { id: 'projects', label: 'Proyectos', icon: Code },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, actions } = usePortfolio();
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    actions.setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Card del navbar con borde degradado transparente */}
          <div className="relative rounded-2xl px-3 sm:px-4 md:px-6 py-3 md:py-4 shadow-2xl overflow-hidden w-full">
            {/* Fondo glassmorphism */}
            <div className="absolute inset-0 backdrop-blur-lg bg-[#0D0D0D]/50" />
            
            {/* Borde degradado transparente */}
            <div 
              className="absolute inset-0 rounded-2xl p-[1px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,170,0.2) 0%, rgba(164,45,180,0.15) 50%, rgba(0,255,170,0.05) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            
            <div className="flex items-center justify-center relative z-10">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1 space-x-5" role="menubar">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = state.activeSection === item.id;
                  
                  // Todos los botones con el mismo estilo uniforme
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        relative flex items-center justify-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base min-w-[110px] sm:min-w-[130px]
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:ring-offset-2 focus:ring-offset-[#0D0D0D]
                        ${isActive 
                          ? 'border-2 border-cyber-blue text-cyber-blue bg-cyber-blue/10 shadow-lg shadow-cyber-blue/30' 
                          : 'border-2 border-transparent text-[#9CA3AF] hover:border-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/5'
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navegar a ${item.label}`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium relative z-10">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  md:hidden ml-auto p-2.5 rounded-xl transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-cyber-blue/50
                  border-2 border-transparent text-[#9CA3AF] 
                  hover:border-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/5
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="md:hidden overflow-hidden"
                  role="menu"
                  aria-label="Menú de navegación móvil"
                >
                  <div className="pt-4 pb-2 space-y-3">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = state.activeSection === item.id;
                      
                      // Todos los botones móviles con el mismo estilo uniforme
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`
                            w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                            transition-all duration-300 text-left relative
                            focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:ring-offset-2 focus:ring-offset-[#0D0D0D]
                            ${isActive 
                              ? 'border-2 border-cyber-blue text-cyber-blue bg-cyber-blue/10 shadow-lg shadow-cyber-blue/30' 
                              : 'border-2 border-transparent text-[#9CA3AF] hover:border-cyber-blue hover:text-cyber-blue hover:bg-cyber-blue/5'
                            }
                          `}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ 
                            x: 0, 
                            opacity: 1,
                            transition: { delay: index * 0.05 }
                          }}
                          exit={{ 
                            x: -20, 
                            opacity: 0,
                            transition: { delay: (navItems.length - index) * 0.03 }
                          }}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          role="menuitem"
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                          <span className="font-medium">{item.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0D0D0D]/90 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
