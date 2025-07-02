import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Desarrollador Frontend',
      company: 'Proyectos Freelance',
      period: '2023 - Presente',
      location: 'Remoto',
      description:
        'Desarrollo de aplicaciones web modernas utilizando React, TypeScript y Tailwind CSS. Creación de interfaces responsivas y optimizadas para diferentes dispositivos.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git'],
    },
    {
      title: 'App Support & QA Analyst for Google',
      company: 'Techmahindra for Google',
      period: '2024 - Presente',
      location: 'Remoto',
      description:
        'Google Appscript developer, App support para Google Workspace Marketplace',
      technologies: ['Appscript', 'QA', 'Support', 'Testing'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mi{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiencia
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-black z-10"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                      <MapPin size={16} className="ml-2" />
                      <span>{exp.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Interesado en trabajar conmigo?
            </h3>
            <p className="text-gray-300 mb-6">
              Estoy siempre abierto a nuevas oportunidades y proyectos
              desafiantes.
            </p>
            <a
              href="mailto:fsegovia06@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={18} />
              <span>Hablemos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
