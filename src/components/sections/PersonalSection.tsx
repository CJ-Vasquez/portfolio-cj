import { motion } from 'framer-motion';
import { 
  Coffee, 
  Puzzle,
  Gamepad2, 
  Music, 
  Mountain, 
  BookOpen, 
  Plane,
  Heart,
  Clock
} from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useAdvancedEffects';

// Datos personales únicos y auténticos - ACTUALIZADOS CON TUS DATOS REALES
const personalFacts = [
  {
    icon: Coffee,
    title: "☕ Adicto al café",
    description: "3 tazas diarias mínimo. Mi setup incluye una cafetera V60 y granos de origen único.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Puzzle,
    title: "🧩 Maestro de rompecabezas",
    description: "Desafío mi mente con rompecabezas complejos. La paciencia y estrategia son mi fuerte.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Gamepad2,
    title: "🎮 Estratega en Dota 2",
    description: "Jugador apasionado de Dota 2 y juegos de estrategia. La táctica y el trabajo en equipo son clave.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Music,
    title: "🎵 Melómano ecléctico",
    description: "De música electrónica a cumbia peruana. Mi playlist es tan diversa como mi stack tecnológico.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Mountain,
    title: "🏔️ Explorador de fin de semana",
    description: "Senderismo y naturaleza para desconectar del código. Mejor debugging al aire libre.",
    color: "from-teal-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "📚 Lector voraz",
    description: "Sci-fi, biografías tech y filosofía. Últimamente explorando sobre IA y ética.",
    color: "from-red-500 to-rose-600"
  }
];

const quirkyStats = [
  { 
    icon: Clock, 
    value: "2:30 AM", 
    label: "Mi hora más productiva",
    description: "Cuando el mundo duerme, yo codifico" 
  },
  { 
    icon: Coffee, 
    value: "847", 
    label: "Tazas de café este año",
    description: "Sí, llevo la cuenta religiosamente" 
  },
  { 
    icon: Plane, 
    value: "12", 
    label: "Ciudades visitadas",
    description: "Cada viaje inspira nuevos proyectos" 
  },
  { 
    icon: Heart, 
    value: "∞", 
    label: "Pasión por aprender",
    description: "Siempre hay una nueva tecnología que explorar" 
  }
];

const funTimeline = [
  {
    year: "2019",
    event: "Mi primer 'Hola Mundo'",
    description: "En Python, obviamente. Fue amor a primera compilación.",
    emoji: "💻"
  },
 {
    year: "2020",
    event: "Primeros pasos en código",
    description: "Comencé mi viaje autodidacta. HTML, CSS y JavaScript fueron mis primeros compañeros.",
    emoji: "💻"
  },
  {
    year: "2021",
    event: "Descubrí React",
    description: "Mi mente explotó. Components everywhere! Desde entonces, no hay vuelta atrás.",
    emoji: "⚛️"
  },
  {
    year: "2022",
    event: "Backend con Java",
    description: "Aprendí Spring Boot y arquitecturas MVC. El poder del backend me fascinó.",
    emoji: "☕"
  },
  {
    year: "2023",
    event: "Bases de datos y APIs",
    description: "MySQL, MongoDB y arquitecturas RESTful. Conectando frontend con backend de forma elegante.",
    emoji: "🗄️"
  },
  {
    year: "Ene 2024",
    event: "Proyectos móviles y Docker",
    description: "Exploré Android Studio, Flutter y contenerización. La versatilidad es clave.",
    emoji: "📱"
  },
  {
    year: "Jul 2024",
    event: "Sistema de Control Aviar",
    description: "Next.js + React en producción. SSR, SSG y arquitectura moderna en acción.",
    emoji: "🦅"
  },
  {
    year: "Sep 2024",
    event: "Conect-Arte y Clínica More Salud",
    description: "Serverless AWS + Spring Boot. Arquitecturas escalables para proyectos ambiciosos.",
    emoji: "🏗️"
  },
  {
    year: "2025",
    event: "Este portafolio",
    description: "Mi declaración de amor al diseño y desarrollo moderno. El siguiente nivel.",
    emoji: "🎨"
  }
];

export function PersonalSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="personal"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header con personalidad */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-['Poppins'] mb-6"
            animate={isVisible ? { 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #F1F5F9, #0EA5E9, #8B5CF6, #F1F5F9)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Más allá del código
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Porque los mejores desarrolladores también son <strong>humanos interesantes</strong> <p></p> 
            con historias que contar y pasiones que los impulsan.
          </p>
        </motion.div>

        {/* Personal Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {personalFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 border border-white/10">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${fact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quirky Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            Datos curiosos que probablemente no necesitas saber 
            <span className="text-2xl">🤓</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quirkyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="neomorph-card p-8 rounded-2xl">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-slate-100 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-semibold mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Fun Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            Mi viaje en el código <span className="text-2xl">🛤️</span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              {funTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-800 z-10 flex items-center justify-center text-lg">
                    {item.emoji}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-slate-100 mb-3">
                        {item.event}
                      </h4>
                      <p className="text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action personal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              ¿Te gusta lo que ves? 👀
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Si crees que alguien así de interesante (y modesto 😅) puede aportar valor a tu equipo, 
              <strong className="text-cyan-400"> hablemos</strong>. Prometo que las conversaciones serán igual de entretenidas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
            >
              ¡Charlemos! ☕
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
