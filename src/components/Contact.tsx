import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'fsegovia06@gmail.com',
      href: 'mailto:fsegovia06@gmail.com',
      description: 'Envíame un correo',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'facundosegovia01',
      href: 'https://www.linkedin.com/in/facundosegovia01/',
      description: 'Conectemos profesionalmente',
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'Facundosegovia01',
      href: 'https://github.com/Facundosegovia01',
      description: 'Ve mis proyectos',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hablemos{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              juntos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ver
            cómo puedo ayudarte a hacerlas realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={
                method.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-purple-300 font-medium mb-1">{method.value}</p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-purple-400" size={24} />
              <span className="text-gray-300">
                Disponible para proyectos remotos y locales
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ya sea que necesites un sitio web completo, una aplicación React.
              estoy aquí para ayudarte. Conversemos sobre tu próximo proyecto.
            </p>
            <a
              href="mailto:fsegovia06@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25 text-lg"
            >
              <Mail size={20} />
              <span>Enviar mensaje</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
