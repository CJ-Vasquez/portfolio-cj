import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useAdvancedEffects';

// Tipos para los proyectos
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'frontend';
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

// Datos de proyectos - TUS PROYECTOS REALES DEL CV
const projects: Project[] = [
  {
    id: 1,
    title: 'Conect-Arte',
    description: 'Plataforma web para conectar artistas con clientes, implementando arquitectura de tres roles (administrador, artista, cliente) con sistema de autenticación completo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
    technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'MySQL', 'DynamoDB', 'Thymeleaf', 'Bootstrap'],
    category: 'fullstack',
    githubUrl: 'https://github.com/CJ-Vasquez/conect-arte',
    demoUrl: 'https://conect-arte.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Clínica More Salud',
    description: 'Sistema web de gestión clínica con arquitectura MVC utilizando Java Spring Boot y Maven. Dashboard administrativo con vistas CRUD completas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format',
    technologies: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'Thymeleaf', 'Bootstrap', 'JPA'],
    category: 'fullstack',
    githubUrl: 'https://github.com/CJ-Vasquez/clinica-more-salud',
    demoUrl: 'https://clinica-more-salud.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Sistema de Control Aviar',
    description: 'Aplicación web moderna para gestión y control de producción avícola utilizando Next.js con React. Optimización SSR y SSG con interfaces intuitivas.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Context API'],
    category: 'frontend',
    githubUrl: 'https://github.com/CJ-Vasquez/control-aviar',
    demoUrl: 'https://control-aviar.vercel.app',
  },
  {
    id: 4,
    title: 'Proyectos Móviles',
    description: 'Desarrollo de aplicaciones móviles con Android Studio y exploración de Flutter SDK. Implementación de soluciones con Docker para contenerización.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format',
    technologies: ['Android Studio', 'Flutter', 'Docker', 'GitHub'],
    category: 'mobile',
    githubUrl: 'https://github.com/CJ-Vasquez',
  },
];

// Categorías para filtros
const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'mobile', label: 'Móvil' },
  { id: 'web', label: 'Web' },
];

export function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtrar proyectos por categoría
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
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
            Mis Proyectos
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Una selección de mis trabajos más destacados y proyectos personales
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de proyectos responsivo */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20">
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay con links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800/80 text-white rounded-full hover:bg-slate-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Ver código en GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-600/80 text-white rounded-full hover:bg-cyan-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Ver demo en vivo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  {/* Badge de destacado */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Destacado
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-xs font-medium border border-slate-600 hover:bg-slate-600 hover:border-cyan-500 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state cuando no hay proyectos filtrados */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-lg">
              No hay proyectos en esta categoría todavía.
            </p>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 mb-6">
            ¿Quieres ver más proyectos o colaborar en algo nuevo?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hablemos
            </motion.a>
            <motion.a
              href="https://github.com/CJ-Vasquez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              Ver todos en GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
