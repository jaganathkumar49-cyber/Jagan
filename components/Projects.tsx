import React from 'react';
import { PROJECT_DATA } from '../constants';
import { Reveal } from './Reveal';
import { Code2, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="h-1 w-20 bg-neon-400 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECT_DATA.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="group relative h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-neon-400/50 transition-colors duration-300">
                <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-neon-400 transition-colors">
                  <ArrowUpRight size={24} />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                    <Code2 className="text-neon-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="mb-6">
                   <span className="text-xs font-mono py-1 px-3 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                     {project.tech}
                   </span>
                </div>

                <ul className="space-y-3">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600 group-hover:bg-neon-400 transition-colors"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};