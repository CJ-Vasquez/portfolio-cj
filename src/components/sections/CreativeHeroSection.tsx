import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowDown, 
  Download, 
  Code, 
  Coffee, 
  Sparkles, 
  Mail, 
  Laptop,
  Smartphone,
  Database,
  Globe,
  Cpu,
  Zap,
  Palette,
  Lightbulb,
  Terminal,
  Rocket
} from 'lucide-react';
import { useState, useEffect } from 'react';

const creativeTexts = [
  "Transformo ideas en experiencias digitales",
  "Código que cobra vida, pixel a pixel",
  "Construyendo el futuro, una línea a la vez",
  "Donde la creatividad se encuentra con la tecnología"
];

interface FloatingIconProps {
  icon: React.ComponentType<{ size?: number }>;
  delay?: number;
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

const FloatingIcon = ({ 
  icon: Icon, 
  delay = 0, 
  x = 0, 
  y = 0, 
  size = 32,
  color = "text-cyan-400"
}: FloatingIconProps) => (
  <motion.div
    className={`fixed ${color}/60 z-10`}
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ 
      opacity: [0, 0.8, 0.4, 0.8, 0],
      scale: [0, 1.2, 0.8, 1.2, 0],
      rotate: [0, 180, 360, 540, 720],
      x: [x, x + 80, x + 160, x + 240],
      y: [y, y - 80, y - 160, y - 240]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    whileHover={{ 
      scale: 1.5, 
      opacity: 1,
      transition: { duration: 0.2 }
    }}
    style={{ left: `${x}px`, top: `${y}px` }}
  >
    <div className="relative">
      <Icon size={size} />
      {/* Glow effect */}
      <motion.div 
        className={`absolute inset-0 ${color}/20 blur-lg`}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon size={size} />
      </motion.div>
    </div>
  </motion.div>
);

interface CreativeHeroSectionProps {
  onOpenContactModal?: () => void;
}

export function CreativeHeroSection({ onOpenContactModal }: CreativeHeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
        style={{ y: y2 }}
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

      {/* Floating Icons - Dynamically distributed uniformly across entire screen */}
      {[
        { icon: Code, size: 36, color: "text-cyan-400", delay: 0 },
        { icon: Laptop, size: 32, color: "text-purple-400", delay: 1 },
        { icon: Database, size: 28, color: "text-green-400", delay: 2 },
        { icon: Globe, size: 34, color: "text-blue-400", delay: 3 },
        { icon: Smartphone, size: 30, color: "text-pink-400", delay: 1.5 },
        { icon: Terminal, size: 32, color: "text-yellow-400", delay: 2.5 },
        { icon: Cpu, size: 28, color: "text-red-400", delay: 0.8 },
        { icon: Zap, size: 30, color: "text-orange-400", delay: 3.2 },
        { icon: Palette, size: 26, color: "text-indigo-400", delay: 1.8 },
        { icon: Lightbulb, size: 28, color: "text-amber-400", delay: 2.8 },
        { icon: Rocket, size: 34, color: "text-emerald-400", delay: 4 },
        { icon: Coffee, size: 30, color: "text-orange-300", delay: 0.5 },
        { icon: Sparkles, size: 24, color: "text-violet-400", delay: 3.8 },
        { icon: Code, size: 30, color: "text-teal-400", delay: 5 },
        { icon: Terminal, size: 28, color: "text-lime-400", delay: 6 },
      ].map((item, index) => {
        const position = getIconPosition(index, 15);
        return (
          <FloatingIcon
            key={`${item.icon.name}-${index}`}
            icon={item.icon}
            delay={item.delay}
            x={position.x}
            y={position.y}
            size={item.size}
            color={item.color}
          />
        );
      })}

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
        {/* Profile Image with Creative Frame */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="relative mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40"
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full animated-gradient p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-800">
              {/* Imagen de perfil */}
              <img 
                src="/images/ciro.PNG" 
                alt="CJ Vásquez" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating status indicator */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-3 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <motion.p
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl sm:text-2xl text-slate-300 max-w-3xl text-shimmer"
            style={{ 
              backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              backgroundSize: "200% 100%"
            }}
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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ y: y1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-slate-400"
          >
            <span className="text-sm">Scroll para descubrir</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-slate-400 rounded-full mt-2"
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