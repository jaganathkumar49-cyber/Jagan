import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import { Reveal } from './Reveal';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <Reveal direction="left">
              <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <Briefcase className="text-neon-400" /> Professional Experience
              </h2>
            </Reveal>

            <div className="space-y-12">
              {EXPERIENCE_DATA.map((exp) => (
                <Reveal key={exp.id} width="100%" direction="left">
                  <div className="relative border-l-2 border-zinc-800 pl-8 pb-2 hover:border-neon-400/30 transition-colors duration-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-lg text-neon-400">{exp.company}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4 font-mono">
                      <span>{exp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal direction="right">
              <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <GraduationCap className="text-neon-400" /> Education
              </h2>
            </Reveal>

            <div className="space-y-12">
              {EDUCATION_DATA.map((edu) => (
                <Reveal key={edu.id} width="100%" direction="right">
                  <div className="relative border-l-2 border-zinc-800 pl-8 pb-2 hover:border-zinc-600 transition-colors duration-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-700"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <h4 className="text-lg text-zinc-300">{edu.institution}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
                      <span>{edu.year}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};