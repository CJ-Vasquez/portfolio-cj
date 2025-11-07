import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  demoUrl, 
  delay = 0 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div 
        className="theme-card overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px'
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-secondary p-3 rounded-full"
                style={{
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-primary)'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-primary p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 
            className="text-xl font-bold mb-3 transition-colors duration-300"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>

          {/* Description */}
          <p 
            className="mb-4 leading-relaxed transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
                style={{
                  background: 'var(--bg-accent)',
                  color: 'var(--color-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}