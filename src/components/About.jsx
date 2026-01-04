import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const features = [
        {
            icon: "bi bi-people",
            title: "Purpose",
            desc: "To foster collaboration and exchange of ideas among the brightest minds. This event is a platform for students to connect, innovate, and solve real-world problems together."
        },
        {
            icon: "bi bi-lightning-charge",
            title: "Our Vision",
            desc: "An Inter-College initiative by the Association of CT-PG to bridge the gap between academic learning and industry standards through collaborative excellence."
        },
        {
            icon: "bi bi-building",
            title: "Participation",
            desc: "Welcoming students from across colleges to join the CT-PG community at Kongu Engineering College for a day of technical and creative synergy."
        },
        {
            icon: "bi bi-rocket-takeoff",
            title: "Why Join Us",
            desc: "It's more than a competition—it's about building a network of innovators. Collaborate with peers, learn from mentors, and ignite your future."
        }
    ];

    return (
        <section id="about" style={{ position: 'relative' }}>
            {/* Some section specific toys */}
            <motion.div 
                className="toy toy-shape-1"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: '10%', right: '5%', borderStyle: 'dashed', width: '60px', height: '60px' }}
            />

            <div className="container">
                <div className="section-header">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-label"
                    >
                        Foundation
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-title-large"
                    >
                        Foster <br /> Collaboration. <br /> Drive Innovation.
                    </motion.h2>
                </div>

                <div className="row g-4 overflow-hidden">
                    {features.map((item, index) => (
                        <div className="col-md-6" key={index}>
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <h4>{item.title}</h4>
                                <p style={{ fontSize: '1rem', opacity: 0.7, lineHeight: '1.7' }}>{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
