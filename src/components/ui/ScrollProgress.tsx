import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        style={{ scaleX }}
      />

      {/* Reading Progress Circle */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Progress Circle */}
          <svg
            className="w-16 h-16 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40}`}
              style={{
                strokeDashoffset: useSpring(
                  scrollYProgress,
                  { stiffness: 100, damping: 30 }
                )
              }}
              initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" />
                <stop offset="50%" stopColor="#bf00ff" />
                <stop offset="100%" stopColor="#ff00aa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute inset-2 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-900/80 hover:bg-gray-800/80 text-white backdrop-blur-sm border border-gray-200/20 hover:scale-110 active:scale-95"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* ELIMINADO: Section Indicators (los botones pequeños grises/cyan) */}
      {/* 
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="space-y-4">
          {['hero', 'about', 'experience', 'projects', 'contact'].map((section, index) => (
            <motion.button ... >
            </motion.button>
          ))}
        </div>
      </div>
      */}
    </>
  );
}
