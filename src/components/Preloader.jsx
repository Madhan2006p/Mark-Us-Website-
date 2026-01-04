import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoaded }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      
        const handleLoad = () => {
            setLoaded(true);
            setTimeout(() => {
                if (onLoaded) onLoaded();
            }, 500); 
        };

       
        if (document.readyState === 'complete') {
            setTimeout(handleLoad, 1500); 
        } else {
            window.addEventListener('load', handleLoad);
            
            setTimeout(handleLoad, 2000);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, [onLoaded]);

    if (!onLoaded) return null; 

    return (
        <div className={`ctn-preloader ${loaded ? 'loaded' : ''}`} id="ctn-preloader" style={{ display: loaded ? 'none' : 'block' }}>
            {/* Matrix-style particles */}
            <div className="particle-grid"></div>

            {/* Preloader animation */}
            <div className="animation-preloader">
                {/* Spinner */}
                <div className="spinner"></div>

                {/* Loading text */}
                <div className="txt-loading">
                    <span className="letters-loading">L</span>
                    <span className="letters-loading">O</span>
                    <span className="letters-loading">A</span>
                    <span className="letters-loading">D</span>
                    <span className="letters-loading">I</span>
                    <span className="letters-loading">N</span>
                    <span className="letters-loading">G</span>
                </div>
                <div className="txt-loading">
                    <span className="letters-loading">M</span>
                    <span className="letters-loading">A</span>
                    <span className="letters-loading">R</span>
                    <span className="letters-loading">K</span>
                    <span className="letters-loading">-</span>
                    <span className="letters-loading">U</span>
                    <span className="letters-loading">S'</span>
                    <span className="letters-loading">26</span>
                </div>

                <p>Initializing System...</p>
            </div>
        </div>
    );
};

export default Preloader;
