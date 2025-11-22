import React from 'react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import { Reveal } from './Reveal';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="down">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A comprehensive overview of my technical abilities and professional soft skills.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <Reveal direction="left">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Technical Skills</h3>
            </Reveal>
            <div className="space-y-8">
              {TECHNICAL_SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <Reveal direction="left">
                    <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-4 font-semibold">{skillGroup.category}</h4>
                  </Reveal>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, index) => (
                      <Reveal key={skill} delay={index * 0.05} width="fit-content" direction="left">
                        <div className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 font-medium hover:border-neon-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all cursor-default">
                          {skill}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <Reveal direction="right">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Professional Skills</h3>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {SOFT_SKILLS.map((skill, index) => (
                <Reveal key={skill} delay={index * 0.05} width="fit-content" direction="right">
                  <div className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-200 hover:bg-zinc-800 transition-colors">
                    {skill}
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={0.3} direction="right">
                <div className="mt-12 p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <h4 className="text-white font-bold mb-2">Languages</h4>
                    <div className="flex gap-4 text-zinc-400">
                        <span>English</span>
                        <span className="text-zinc-700">•</span>
                        <span>Malayalam</span>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};