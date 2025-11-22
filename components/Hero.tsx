import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Reveal } from './Reveal';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-20 right-[-100px] w-96 h-96 bg-neon-400/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-100px] w-72 h-72 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <p className="text-neon-400 font-medium mb-4 tracking-widest text-sm uppercase">Full Stack Developer</p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="text-zinc-400">Jaganath K.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-zinc-950 bg-neon-400 hover:bg-neon-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                View Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-base font-medium rounded-full text-white hover:bg-zinc-800 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};