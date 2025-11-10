import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Code } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useAdvancedEffects';

// Datos de experiencia - TUS PROYECTOS REALES
const experiences = [
  {
    id: 1,
    position: 'Desarrollador Full-Stack',
    company: 'Proyecto Conect-Arte',
    location: 'Lima, Perú',
    period: 'Sep 2024 - Actualidad',
    type: 'Proyecto Académico',
    description: 'Plataforma web para conectar artistas con clientes, implementando arquitectura de tres roles (administrador, artista, cliente) con sistema de autenticación completo.',
    technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'MySQL', 'DynamoDB', 'Thymeleaf', 'Bootstrap', 'Git'],
    achievements: [
      'Backend con Node.js usando arquitectura serverless sobre AWS Lambda y API Gateway',
      'APIs RESTful documentadas con integración completa frontend-backend',
      'Bases de datos: MySQL en AWS RDS + DynamoDB para servicios NoSQL',
      'Frontend responsive con Thymeleaf y Bootstrap con dashboards diferenciados por usuario',
      'Seguridad siguiendo estándares OWASP con configuración de firewall y mitigación DDoS',
      'Documentación técnica completa: diagramas UML, historias de usuario y estrategias de testing'
    ]
  },
  {
    id: 2,
    position: 'Desarrollador Java Spring Boot',
    company: 'Proyecto Clínica More Salud',
    location: 'Lima, Perú',
    period: 'Sep 2024 - Actualidad',
    type: 'Proyecto Académico',
    description: 'Sistema web de gestión clínica con arquitectura MVC utilizando Java Spring Boot y Maven.',
    technologies: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'Thymeleaf', 'Bootstrap', 'JPA', 'Eclipse'],
    achievements: [
      'Dashboard administrativo con vistas CRUD completas para gestión de usuarios, médicos, pacientes y especialidades',
      'Arquitectura backend con controladores REST, capa de servicios y repositorios JPA',
      'Base de datos MySQL con MySQL Workbench y DBeaver para administración y optimización',
      'Frontend con Thymeleaf y Bootstrap garantizando experiencia fluida y diseño responsive',
      'Control de versiones con Git/GitHub y gestión en Eclipse IDE'
    ]
  },
  {
    id: 3,
    position: 'Desarrollador Frontend',
    company: 'Sistema de Control Aviar',
    location: 'Lima, Perú',
    period: 'Jul 2024 - Oct 2024',
    type: 'Proyecto Personal',
    description: 'Aplicación web moderna para gestión y control de producción avícola utilizando Next.js con React.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Context API'],
    achievements: [
      'Arquitectura de componentes reutilizables con optimización SSR y SSG de Next.js',
      'Interfaces intuitivas para registro de datos, control de alimentación y generación de reportes',
      'Integración de APIs REST para sincronización de datos en tiempo real',
      'Responsive design con CSS modules y Tailwind CSS para experiencia óptima en móviles y desktop',
      'Gestión de estado con React Hooks y Context API',
      'Despliegue en plataforma de hosting con optimización de performance y SEO'
    ]
  },
  {
    id: 4,
    position: 'Desarrollador de Aplicaciones',
    company: 'Proyectos Diversos',
    location: 'Lima, Perú',
    period: 'Ene 2024 - Actualidad',
    type: 'Cibertec',
    description: 'Participación en múltiples proyectos de desarrollo móvil y contenerización de aplicaciones.',
    technologies: ['Android Studio', 'Flutter', 'Docker', 'GitHub', 'Mobile Development'],
    achievements: [
      'Desarrollo de Aplicaciones Móviles con Android Studio y exploración de Flutter SDK',
      'Implementación de soluciones con Docker para contenerización en entornos de desarrollo',
      'Uso estratégico del GitHub Student Developer Pack para optimizar flujo de trabajo',
      'Experimentación con diferentes frameworks y herramientas modernas de desarrollo'
    ]
  }
];

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proyectos académicos y personales donde he aplicado tecnologías modernas para resolver problemas reales
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-800 z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-left md:pr-8' : 'md:text-left md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-colors duration-300 shadow-lg"
                  >
                    {/* Header - Período y tipo en línea horizontal como imagen 2 */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-semibold border border-cyan-500/20">
                        {exp.type}
                      </span>
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl font-bold text-slate-100 mb-3">
                      {exp.position}
                    </h3>
                    
                    {/* Company & Location en línea horizontal */}
                    <div className="flex items-center gap-4 text-slate-400 mb-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key achievements */}
                    <div className="mb-6">
                      <h4 className="text-slate-100 font-semibold mb-3">Logros y Responsabilidades:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-3">Tecnologías Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-700/50 text-cyan-400 rounded-lg text-sm font-medium border border-slate-600/50 hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            ¿Quieres ver más detalles de estos proyectos?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-shadow duration-300"
          >
            <Code className="w-5 h-5" />
            Ver Portafolio Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
