import { PortfolioProvider, usePortfolioInit } from './context/PortfolioContext';
import { CreativeHeroSection } from './components/sections/CreativeHeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PersonalSection } from './components/sections/PersonalSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Navbar } from './components/sections/Navbar';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ContactModal } from './components/ui/ContactModal';
import { useState } from 'react';

function AppContent() {
  usePortfolioInit();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Navigation */}
      <Navbar />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Main content */}
      <main className="relative">
        <CreativeHeroSection onOpenContactModal={() => setIsContactModalOpen(true)} />
        <AboutSection />
        <PersonalSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
            {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Columna 1: Sobre mí */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Ciro Vásquez</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Desarrollador Full Stack especializado en arquitecturas escalables con Spring Boot y AWS. 
                Apasionado por crear soluciones digitales innovadoras.
              </p>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Enlaces</h3>
              <nav className="space-y-2">
                <a
                  href="#about"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Sobre mí
                </a>
                <a
                  href="#experience"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Experiencia
                </a>
                <a
                  href="#projects"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Proyectos
                </a>
                <a
                  href="#contact"
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Contacto
                </a>
              </nav>
            </div>

            {/* Columna 3: Redes sociales */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Conecta</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/CJ-Vasquez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/cj-vasquez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:ciro.vm92@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ciro Vásquez. Desarrollado con React, TypeScript y Tailwind CSS.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Lima, Perú
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}

export default App;

