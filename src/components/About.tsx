import React from 'react';
import { Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Desarrollo Frontend',
      description: 'Especializado en React, TypeScript y tecnologías modernas',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Ciberseguridad',
      description:
        'Apasionado por la seguridad informática y mejores prácticas',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              mí
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <img
              src="https://facundosegovia.vercel.app/img/yo2.jpeg"
              alt="Workspace"
              className="relative z-10 w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Soy un{' '}
                <span className="text-purple-400 font-bold">
                  Desarrollador Frontend
                </span>{' '}
                con pasión por la tecnología desde mi infancia. Desde pequeño,
                me fascinan la programación, la ciberseguridad y la computación.
              </p>
              <p>
                Esta <span className="text-purple-400 font-bold">pasión</span>{' '}
                me llevó a especializarme en la creación de interfaces
                intuitivas y visualmente atractivas, utilizando{' '}
                <span className="text-purple-400 font-bold">
                  React, Astro, JavaScript y Tailwind CSS
                </span>
                .
              </p>
              <p>
                Actualmente trabajo en{' '}
                <span className="text-purple-400 font-bold">Google</span>,
                formando parte del equipo de revisión de Google Workspace
                Marketplace, donde realizo tareas de testing y desarrollo.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
