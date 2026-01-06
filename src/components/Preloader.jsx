import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoaded }) => {
    const [progress, setProgress] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setFade(true), 500);
                    setTimeout(() => onLoaded(), 1100);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onLoaded]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#070707',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: fade ? 0 : 1,
            pointerEvents: fade ? 'none' : 'auto',
            transition: 'opacity 0.6s ease-in-out'
        }}>
            <h1 style={{ 
                fontFamily: 'Syncopate', 
                fontSize: '1rem', 
                letterSpacing: '1em', 
                color: '#fff',
                marginBottom: '2rem'
            }}>MARKUS26</h1>
            <div style={{
                width: '200px',
                height: '1px',
                background: 'rgba(255,255,255,0.1)',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${Math.min(progress, 100)}%`,
                    background: '#fff',
                    transition: 'width 0.2s ease-out'
                }}></div>
            </div>
            <span style={{
                fontFamily: 'Outfit',
                fontSize: '0.8rem',
                marginTop: '1rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.2em'
            }}>{Math.min(progress, 100)}%</span>
        </div>
    );
};

export default Preloader;
