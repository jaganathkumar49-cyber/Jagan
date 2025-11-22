import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Reveal } from './Reveal';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-zinc-900 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal direction="left">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's work together.</h2>
            </Reveal>
            <Reveal delay={0.1} direction="left">
              <p className="text-zinc-400 text-lg mb-8 max-w-md">
                I'm currently available for freelance work or full-time positions. 
                Drop me a line if you want to discuss a project.
              </p>
            </Reveal>
            
            <Reveal delay={0.2} direction="left">
              <div className="flex gap-4">
                 <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-zinc-900 rounded-full text-white hover:bg-neon-400 hover:text-black transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.2} direction="right">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-neon-400 hover:bg-zinc-900 transition-all duration-300">
                <div className="p-3 bg-zinc-950 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-neon-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Email Me</p>
                  <p className="text-lg text-white font-medium break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.3} direction="right">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-neon-400 hover:bg-zinc-900 transition-all duration-300">
                <div className="p-3 bg-zinc-950 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-neon-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Call Me</p>
                  <p className="text-lg text-white font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.4} direction="right">
              <div className="flex items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                <div className="p-3 bg-zinc-950 rounded-full mr-4">
                  <MapPin className="text-neon-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Location</p>
                  <p className="text-lg text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jaganath K. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};