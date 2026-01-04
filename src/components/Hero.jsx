import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ThreeScene from './ThreeScene';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [tagIndex, setTagIndex] = useState(0);
    const titleRef = useRef(null);

    const taglines = [
        "Ignite Your Skills. Inspire Your Future.",
        "Where Innovation Meets Imagination.",
        "Learn, Compete & Evolve."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTagIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const ctx = gsap.context(() => {
            gsap.from(".hero-title span", {
                y: isMobile ? 100 : 200,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });
        }, titleRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const eventDate = new Date("January 24, 2026 09:00:00").getTime();
        const timer = setInterval(() => {
            const now = Date.now();
            const diff = eventDate - now;
            if (diff <= 0) {
                clearInterval(timer);
                return;
            }
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const fmt = (val) => val.toString().padStart(2, "0");

    return (
        <section id="hero" className="hero-section">
            <ThreeScene />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-end">
                    <div className="col-lg-8" ref={titleRef}>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="section-label"
                        >
                            Association of CT-PG · Kongu Engineering College
                        </motion.div>

                        <h1 className="hero-title section-title-large" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ display: 'block' }}>MARK</span>
                            <span style={{ display: 'block' }}>US – 26</span>
                        </h1>

                        <div style={{ height: '30px', marginTop: '2rem' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tagIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ fontSize: '1.2rem', fontWeight: '300', color: 'var(--text-dim)', letterSpacing: '0.1em' }}
                                >
                                    {taglines[tagIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            style={{ 
                                fontSize: '1.2rem', 
                                color: 'var(--text-dim)', 
                                maxWidth: '600px', 
                                marginTop: '2.5rem',
                                fontWeight: '300',
                                lineHeight: '1.6' 
                            }}
                        >
                            An Inter-College Symposium celebrating technical excellence and collaboration. 
                            Join us for an unforgettable experience on January 24, 2026.
                        </motion.p>
                    </div>

                    <div className="col-lg-4 mt-5">
                        <div className="d-flex flex-wrap gap-4 mb-5">
                            <a href="#events" className="btn-primary-custom" style={{ padding: '1.2rem 3rem' }}>
                                Events
                            </a>
                        </div>
                        
                        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem' }}>
                            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>SECURE ACCESS OPEN</h4>
                            <div className="d-flex gap-4">
                                <div>
                                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: '700' }}>{fmt(timeLeft.days)}</span>
                                    <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Days Left</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: '700' }}>{fmt(timeLeft.hours)}</span>
                                    <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hours</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: '700' }}>{fmt(timeLeft.minutes)}</span>
                                    <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
