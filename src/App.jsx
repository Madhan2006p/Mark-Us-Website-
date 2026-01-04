import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Coordinators from './components/Coordinators';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  // Scroll Reveal Observer
  useEffect(() => {
    if (loading) return;

    const revealElements = document.querySelectorAll('.reveal');
    const callback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, index * 150);
        }
      });
    };

    const revealObserver = new IntersectionObserver(callback, { root: null, threshold: 0.15, rootMargin: "0px" });
    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [loading]);

  return (
    <>
      <Preloader onLoaded={handleLoaded} />

      {!loading && (
        <div className="page-wrapper fade-in">
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Schedule />
          <Coordinators />
          <Registration />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
