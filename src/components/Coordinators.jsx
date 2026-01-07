import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users } from 'lucide-react';

const Coordinators = () => {
    const faculty = {
        name: "Mr.M.Arumugam",
        role: "Faculty Coordinator",
        desc: "Event logistics and organizational vision of Markus-26 with decades of expertise.",
        phone: "+91 98427 78152"
    };

    const students = [
        {
            name: "Rithanya Paramashivam",
            role: "Secretary",
            phone: "+91 93457 48455"
        },
        {
            name: "Naveen Kumar",
            role: "Additionl-Secretary",
            phone: "+91 82487 88729"
        }
    ];

    return (
        <section id="coordinators">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-label"
                    >
                        Management
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-title-large"
                    >
                        The Creative <br /> Minds.
                    </motion.h2>
                </div>

                <div className="row g-5">
                    {/* Faculty Section */}
                    <div className="col-lg-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="feature-card faculty-box"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '2px solid var(--accent-primary)',
                                height: 'auto'
                            }}
                        >
                            <div className="feature-icon" style={{ color: 'var(--accent-primary)' }}>
                                <Users size={32} />
                            </div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: '700', letterSpacing: '0.2rem', textTransform: 'uppercase' }}>FACULTY ADVISOR</span>
                            <h3 style={{ margin: '1rem 0' }}>{faculty.name}</h3>
                            <p style={{ marginBottom: '2rem', opacity: 0.7 }}>{faculty.desc}</p>
                            <a href={`tel:${faculty.phone}`} className="btn-primary-custom w-100 justify-content-center">
                                <Phone size={16} style={{ marginRight: 8 }} /> {faculty.phone}
                            </a>
                        </motion.div>
                    </div>

                    {/* Students Section */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {students.map((student, index) => (
                                <div className="col-md-12" key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="feature-card student-box"
                                        style={{ height: 'auto' }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                                            <div>
                                                <span style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', fontWeight: '700', letterSpacing: '0.1rem' }}>{student.role}</span>
                                                <h4 style={{ margin: '0.5rem 0' }}>{student.name}</h4>
                                            </div>
                                            <a href={`tel:${student.phone}`} className="btn-secondary-custom" style={{ margin: 0, padding: '0.8rem 1.5rem', fontSize: '0.8rem' }}>
                                                <Phone size={14} style={{ marginRight: 8 }} /> {student.phone}
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coordinators;
