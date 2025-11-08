import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Download, 
  Mail, 
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

const creativeTexts = [
  "Transformo ideas en experiencias digitales",
  "Código que cobra vida, pixel a pixel",
  "Construyendo el futuro, una línea a la vez",
  "Donde la creatividad se encuentra con la tecnología"
];



interface CreativeHeroSectionProps {
  onOpenContactModal?: () => void;
}

export function CreativeHeroSection({ onOpenContactModal }: CreativeHeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % creativeTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate uniform distribution positions
  const getIconPosition = (index: number, total: number) => {
    const cols = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / cols);
    const col = index % cols;
    const row = Math.floor(index / cols);
    
    return {
      x: (windowSize.width / (cols + 1)) * (col + 1) - 50,
      y: (windowSize.height / (rows + 1)) * (row + 1) - 50,
    };
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      {/* Magic cursor trail */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-cyan-400/50 pointer-events-none mix-blend-screen z-50"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-cyan-400/30 pointer-events-none z-40"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      />
      
      {/* Enhanced floating geometric shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border-2 ${
              i % 4 === 0 ? 'border-cyan-400/20 rounded-full' :
              i % 4 === 1 ? 'border-purple-400/20 rounded-lg rotate-45' :
              i % 4 === 2 ? 'border-green-400/20 rounded-none' :
              'border-pink-400/20 rounded-full'
            } ${
              i % 3 === 0 ? 'w-24 h-24' :
              i % 3 === 1 ? 'w-32 h-32' : 'w-40 h-40'
            }`}
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              top: `${(i * 17 + 10) % 85}%`,
            }}
            animate={{
              scale: [1, 1.3, 0.8, 1.2, 1],
              opacity: [0.1, 0.3, 0.1, 0.25, 0.1],
              rotate: [0, 180, 360, 180, 0],
              x: [0, 30, -20, 40, 0],
              y: [0, -40, 20, -30, 0]
            }}
            transition={{
              duration: 12 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* Code snippets floating effect - Uniform distribution */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          {text: 'const', x: 120, y: 150},
          {text: 'function', x: 320, y: 200},
          {text: 'return', x: 520, y: 180},
          {text: '<div>', x: 720, y: 160},
          {text: '{}', x: 920, y: 190},
          {text: '=>', x: 1120, y: 170},
          {text: 'async', x: 220, y: 400},
          {text: 'await', x: 420, y: 420},
          {text: 'useState', x: 620, y: 380},
          {text: 'useEffect', x: 820, y: 410},
        ].map((item, i) => (
          <motion.div
            key={item.text}
            className={`absolute text-sm font-mono font-bold ${
              i % 3 === 0 ? 'text-cyan-400/40' :
              i % 3 === 1 ? 'text-purple-400/40' : 'text-green-400/40'
            }`}
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
            animate={{
              y: [0, -200, -400],
              opacity: [0, 0.6, 0],
              rotate: [0, 10, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut"
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* Holographic Profile Card */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="relative mx-auto mb-12 group flex items-center justify-center"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Card Container */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-xl cursor-pointer card-holographic"
            style={{
              transformOrigin: "center center"
            }}
            whileInView={{
              rotateX: [0, 10, 0, -10, 0],
              rotateY: [0, 15, 0, -15, 0],
              z: [0, 20, 0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
          >
            {/* Holographic Background with enhanced effects */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30"
              style={{
                backgroundSize: "400% 400%",
                filter: "blur(4px)",
                transformStyle: "preserve-3d",
                transform: "translateZ(-10px)"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
                scale: [1, 1.05, 1, 1.05],
                opacity: [0.5, 0.7, 0.5, 0.7]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />

            {/* Card Frame */}
            <div className="absolute inset-[2px] rounded-xl bg-slate-900/90 backdrop-blur-sm p-1 overflow-hidden">
              {/* Enhanced Rainbow Border with 3D effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"
                  style={{ 
                    filter: "blur(4px)",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(-5px)"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Profile Image Container with Depth */}
              <div 
                className="relative w-full h-full rounded-lg overflow-hidden"
                style={{ 
                  transform: "translateZ(10px)"
                }}
              >
                <img 
                  src="/images/ciro.PNG" 
                  alt="CJ Vásquez" 
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Holographic Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse-gradient"
                />

                {/* Scanline Effect */}
                <div
                  className="absolute inset-0 scanline-effect"
                />
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Poppins'] leading-tight">
            <span className="block text-slate-100 mb-2">Hola, soy</span>
            <motion.span 
              className="block gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              CJ Vásquez
            </motion.span>
          </h1>
        </motion.div>

        {/* Rotating Creative Phrases */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 h-16 flex items-center justify-center overflow-hidden"
        >
          <motion.p
            key={currentText}
            initial={{ 
              opacity: 0,
              x: 50,
              rotateX: 90,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              rotateX: 0,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0,
              x: -50,
              rotateX: -90,
              filter: "blur(10px)"
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-300% animate-gradient"
          >
            {creativeTexts[currentText]}
          </motion.p>
        </motion.div>

        {/* Role & Specialization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-semibold">Desarrollador Full Stack</span>
            <div className="w-px h-6 bg-slate-600"></div>
            <span className="text-slate-300">React • Node.js • TypeScript</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative z-10 flex items-center space-x-2">
              <span>Ver mi trabajo</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button
            onClick={onOpenContactModal}
            className="group relative px-8 py-4 glass-card text-cyan-400 font-semibold rounded-xl hover:text-white transition-all duration-300 border border-cyan-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
              <span>Hablemos</span>
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => window.open('#', '_blank')}
            className="group px-8 py-4 glass-card text-slate-300 font-semibold rounded-xl hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Descargar CV</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4"
        >
          <motion.a
            href="https://github.com/CJ-Vasquez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 hover:-translate-x-2"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/cj-vasquez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 hover:-translate-x-2"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://twitter.com/CJVasquezDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 hover:-translate-x-2"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://cj-vasquez.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 hover:-translate-x-2"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 mb-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center space-y-3 text-slate-400/80 hover:text-slate-300 transition-colors group cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-medium tracking-wide">Scroll para descubrir</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-slate-300 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-3 bg-current rounded-full mt-2 group-hover:bg-slate-300 transition-colors"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
}