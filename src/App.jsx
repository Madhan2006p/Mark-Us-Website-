import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Coordinators from './components/Coordinators';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <Preloader onLoaded={handleLoaded} />

      <div className="aurora-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
      </div>

      {!loading && (
        <div className="page-wrapper fade-in">
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Coordinators />
          <Registration />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
