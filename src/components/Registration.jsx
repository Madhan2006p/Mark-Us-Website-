import React from 'react';
import { motion } from 'framer-motion';

const Registration = () => {
    return (
        <section id="registration">
            <div className="container">
                <div className="section-header text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-label"
                    >
                        Access
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-title-large"
                    >
                        Secure Your <br /> Entry Pass.
                    </motion.h2>
                </div>

                <div className="d-flex justify-content-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="feature-card"
                        style={{ maxWidth: '900px', width: '100%', padding: '0' }}
                    >
                        <div className="row g-0">
                            <div className="col-md-12 registration-content-box">
                                <div className="reg-header-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                                    <span style={{ fontSize: '0.8rem', letterSpacing: '0.4em', opacity: 0.5 }}>OFFICIAL ADMISSION</span>
                                    <span style={{ color: 'var(--accent-secondary)', fontWeight: '700', fontSize: '0.9rem' }}>REGISTRATION OPEN</span>
                                </div>
                                <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.1 }}>MARKUS – 26 <br /> INTER-COLLEGE SYMPOSIUM</h3>
                                <p style={{ color: 'var(--text-dim)', marginBottom: '3.5rem', fontWeight: '300', fontSize: '1.2rem', maxWidth: '600px' }}>
                                    Your pass includes access to all technical sessions and non-technical events. Conducted by the Association of CT-PG.
                                </p>
                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                    <a href="#events" className="btn-primary-custom" style={{ padding: '1.2rem 3rem' }}>GET YOUR PASS NOW</a>
                                    <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>Event Date: <span style={{ color: '#fff', fontWeight: 600 }}>24 Jan 2026</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
