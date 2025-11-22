import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-neon-400 selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
};

export default App;