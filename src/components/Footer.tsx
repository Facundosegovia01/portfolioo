import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Facundo Segovia
            </h3>
            <p className="text-gray-400">Desarrollador Frontend & Técnico en Soporte</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Facundosegovia01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/facundosegovia01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:fsegovia06@gmail.com"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Facundo Segovia. Hecho con{' '}
            <Heart className="text-red-400 fill-current" size={16} />
            {' '}y mucho código.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;