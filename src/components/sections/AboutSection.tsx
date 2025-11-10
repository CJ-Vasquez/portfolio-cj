import { motion } from 'framer-motion';
import { Code2, Database, User, Calendar, Trophy, Award } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useAdvancedEffects';

// Estadísticas reales basadas en tu CV
const stats = [
  { label: 'Años de Experiencia', value: '2+', icon: Calendar },
  { label: 'Proyectos Completados', value: '5+', icon: Trophy },
  { label: 'Tecnologías Dominadas', value: '10+', icon: Database },
];


// Skills reales basadas en tu CV con niveles reales
const skills = [
  { name: 'React', level: 95, category: 'Frontend', color: 'text-cyan-400' },
  { name: 'TypeScript', level: 90, category: 'Frontend', color: 'text-blue-400' },
  { name: 'Node.js', level: 85, category: 'Backend', color: 'text-green-400' },
  { name: 'PostgreSQL', level: 80, category: 'Database', color: 'text-indigo-400' },
  { name: 'Docker', level: 75, category: 'DevOps', color: 'text-purple-400' },
  { name: 'AWS', level: 70, category: 'Cloud', color: 'text-orange-400' },
];

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
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
            Sobre mí
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Desarrollador apasionado por crear soluciones digitales innovadoras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda: Resumen personal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Resumen personal actualizado con tus datos */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Mi Historia</h3>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Estudiante de <strong className="text-cyan-400">Computación e Informática</strong> con 
                  experiencia práctica en desarrollo de aplicaciones web full-stack, especializado 
                  en el diseño de arquitecturas escalables con <strong className="text-cyan-400">Java Spring Boot</strong> y 
                  servicios serverless en <strong className="text-orange-400">AWS</strong>.
                </p>
                
                <p>
                  He desarrollado proyectos académicos que integran backend robusto, bases de datos 
                  relacionales y frontend responsive. Mi enfoque se centra en escribir código limpio, 
                  implementar mejores prácticas y mantenerme al día con las tendencias de la industria 
                  para entregar soluciones de alta calidad que superen las expectativas.
                </p>
                
                <p>
                  Destaco por mi enfoque en resolver problemas complejos mediante código limpio, 
                  documentación técnica detallada y capacidad para implementar soluciones end-to-end 
                  desde el diseño hasta el despliegue. Disfruto colaborar en equipos multidisciplinarios 
                  y enfrentar nuevos desafíos que me permitan crecer profesionalmente.
                </p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-100 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Columna derecha: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Habilidades Técnicas</h3>
              </div>

              {/* Skills grid actualizado con tus tecnologías reales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold ${skill.color}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    
                    {/* Barra de progreso animada */}
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                    
                    <div className="text-xs text-slate-500">{skill.category}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
