
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Timeline />
        <Experience />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
