import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

   
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest('.navbar-collapse') && !e.target.closest('.navbar-toggler')) {
                closeMenu();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#hero" onClick={closeMenu}>
                    <i className="bi bi-cpu-fill me-2"></i>Mark Us – 26
                </a>
                <button
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    <span className="custom-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#hero" onClick={closeMenu}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" onClick={closeMenu}>About</a></li>
                      
                        <li className="nav-item"><a className="nav-link" href="#events" onClick={closeMenu}>Events</a></li>
                        <li className="nav-item"><a className="nav-link" href="#schedule" onClick={closeMenu}>Schedule</a></li>
                        <li className="nav-item"><a className="nav-link" href="#coordinators" onClick={closeMenu}>Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
