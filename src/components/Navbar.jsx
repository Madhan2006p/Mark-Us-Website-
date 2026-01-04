import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#hero">
                    MARKUS<span style={{ opacity: 0.4 }}>26</span>
                </a>
                
                <button
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={toggleMenu}
                    style={{ border: 'none', background: 'transparent' }}
                >
                    <div style={{ width: 25, height: 2, background: '#fff', marginBottom: 5 }}></div>
                    <div style={{ width: 25, height: 2, background: '#fff' }}></div>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#hero" onClick={closeMenu}>HOME</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" onClick={closeMenu}>FOUNDATION</a></li>
                        <li className="nav-item"><a className="nav-link" href="#events" onClick={closeMenu}>COMPETITION</a></li>
                        <li className="nav-item"><a className="nav-link" href="#schedule" onClick={closeMenu}>TIMELINE</a></li>
                        <li className="nav-item"><a className="nav-link" href="#coordinators" onClick={closeMenu}>SQUAD</a></li>
                        <li className="nav-item">
                            <a href="#registration" className="btn-primary-custom ms-lg-4" style={{ padding: '0.6rem 2rem', fontSize: '0.75rem' }} onClick={closeMenu}>
                                REGISTER
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
