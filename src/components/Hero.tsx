import React from 'react';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'TypeScript', color: 'text-blue-600' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'Tailwind CSS', color: 'text-cyan-400' },
    { name: 'Astro', color: 'text-orange-400' },
    { name: 'Bootstrap', color: 'text-purple-500' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQF03Hq0FH185w/profile-displayphoto-shrink_200_200/B4DZOwu_pjGUAY-/0/1733836930950?e=1756944000&v=beta&t=qRMP7-KYcN-uoWbhTPxtuhQAlUqwIpeWqIPx9N1mDWw"
              alt="Facundo Segovia"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">Hola, soy </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Facundo
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                <span className="text-purple-400 font-bold">
                  Desarrollador Frontend
                </span>{' '}
                apasionado por crear experiencias digitales intuitivas y
                visualmente atractivas.
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`font-medium ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:fsegovia06@gmail.com"
                className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <Mail size={20} />
                <span>Contáctame</span>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/facundosegovia01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Facundosegovia01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
