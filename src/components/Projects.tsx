import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Paint con Canvas y JavaScript',
      description:
        'Aplicación web que simula Paint utilizando la etiqueta canvas para crear herramientas de dibujo interactivas.',
      image: 'https://facundosegovia.vercel.app/img/paint.png',
      technologies: ['JavaScript', 'HTML5 Canvas', 'Tailwind CSS'],
      liveUrl: 'https://facundosegovia01.github.io/paint-js/',
      githubUrl: 'https://github.com/Facundosegovia01/paint-js/',
      featured: true,
    },
    {
      title: 'TODO List TypeScript',
      description:
        'Lista de tareas moderna desarrollada con TypeScript y React, con funcionalidades de filtrado y persistencia local.',
      image: 'https://facundosegovia.vercel.app/img/todo.png',
      technologies: ['TypeScript', 'React', 'Local Storage'],
      liveUrl: 'https://todo-list-typescript-1.vercel.app/',
      githubUrl: 'https://github.com/Facundosegovia01/todo-list-typescript',
      featured: true,
    },
    {
      title: 'Clon Tesla',
      description:
        'Réplica de la página oficial de Tesla, enfocada en el diseño responsivo y la experiencia de usuario.',
      image: 'https://facundosegovia.vercel.app/img/tesla.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://clon-tesla-nine.vercel.app/',
      githubUrl: 'https://github.com/Facundosegovia01/pagina-prueba',
      featured: false,
    },
    {
      title: 'Starbucks Clon',
      description:
        'Clonación de la página de Starbucks usando Astro y Tailwind CSS con animaciones suaves.',
      image: 'https://facundosegovia.vercel.app/img/starbuck.png',
      technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://starbucks-by-facudev.vercel.app/',
      githubUrl: 'https://github.com/Facundosegovia01/starbucks-clon-final',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Mis{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                      Proyecto Destacado
                    </span>
                  )}

                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-purple-300 hover:bg-white/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink size={18} />
                    <span>Ver Proyecto</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ver más proyectos?
            </h3>
            <p className="text-gray-300 mb-6">
              Visita mi perfil de GitHub para explorar todos mis repositorios y
              contribuciones.
            </p>
            <a
              href="https://github.com/Facundosegovia01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github size={18} />
              <span>Ver GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
