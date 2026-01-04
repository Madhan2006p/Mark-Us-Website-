import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
    const technicalEvents = [
        {
            title: "Paper Presentation",
            icon: "bi-file-earmark-richtext",
            desc: "Present your research on emerging technologies and innovative ideas.",
            details: ["Individual or Team of 2", "Abstract submission required", "7 mins presentation"],
            time: "10:00 AM",
            regLink: "https://forms.gle/FTARYdDNY7DP892p6"
        },
        {
            title: "Project Presentation",
            icon: "bi-display",
            desc: "Showcase your innovative projects and working prototypes.",
            details: ["Team of up to 3", "Working model preferred", "Interactive demonstration"],
            time: "11:00 AM",
            regLink: "#"
        },
        {
            title: "UI UX",
            icon: "bi-palette",
            desc: "Design intuitive and aesthetically pleasing user interfaces.",
            details: ["Individual Participation", "Focus on UX", "Figma/Adobe XD"],
            time: "01:30 PM",
            regLink: "#"
        },
        {
            title: "Tech Quiz",
            icon: "bi-question-diamond",
            desc: "Test your knowledge on the latest trends and fundamentals.",
            details: ["Team of 2", "Multiple Rounds", "Buzzer round"],
            time: "10:30 AM",
            regLink: "#"
        },
        {
            title: "Code Adapt",
            icon: "bi-code-slash",
            desc: "A competitive coding challenge to solve logical problems.",
            details: ["Individual Participation", "C/C++/Java/Python", "Efficiency focus"],
            time: "02:00 PM",
            regLink: "#"
        }
    ];

    const nonTechnicalEvents = [
        {
            title: "IPL Auction",
            icon: "bi-trophy",
            desc: "Experience the thrill of a real-life IPL auction strategy.",
            details: ["Team of 3-4", "Budgeting & Strategy", "Build dream team"],
            time: "10:30 AM",
            regLink: "#"
        },
        {
            title: "Chill and Skill",
            icon: "bi-controller",
            desc: "Relax and showcase your unique non-technical talents.",
            details: ["Individual Participation", "Fun activities", "Talent showcase"],
            time: "02:00 PM",
            regLink: "#"
        }
    ];

    const [redirecting, setRedirecting] = useState(false);
    const [targetEvent, setTargetEvent] = useState("");

    const handleRegistration = (e, event) => {
        if (!event.regLink || event.regLink === "#") return;
        e.preventDefault();
        setTargetEvent(event.title);
        setRedirecting(true);
        setTimeout(() => {
            window.open(event.regLink, "_blank");
            setRedirecting(false);
        }, 1500);
    };

    const EventCard = ({ event, index }) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="col-lg-4 col-md-6 mb-4"
        >
            <div className="feature-card h-100 d-flex flex-column" style={{ padding: '2.5rem' }}>
                <div className="feature-icon">
                    <i className={`bi ${event.icon}`}></i>
                </div>
                <span style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>{event.time}</span>
                <h4 style={{ marginBottom: '1rem' }}>{event.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, opacity: 0.7 }}>{event.desc}</p>
                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                    <a 
                        href={event.regLink}
                        onClick={(e) => handleRegistration(e, event)}
                        className="btn-primary-custom w-100"
                        style={{ padding: '0.8rem', fontSize: '0.8rem' }}
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="events" style={{ position: 'relative' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Competition</span>
                    <h2 className="section-title-large">Fuel &nbsp; Your <br /> Ambition.</h2>
                </div>

                <div className="mb-5">
                    <h3 className="mb-4" style={{ letterSpacing: '0.2em', fontSize: '0.9rem', opacity: 0.6 }}>TECHNICAL</h3>
                    <div className="row">
                        {technicalEvents.map((event, idx) => (
                            <EventCard key={idx} event={event} index={idx} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-4" style={{ letterSpacing: '0.2em', fontSize: '0.9rem', opacity: 0.6 }}>NON-TECHNICAL</h3>
                    <div className="row">
                        {nonTechnicalEvents.map((event, idx) => (
                            <EventCard key={idx} event={event} index={idx} />
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {redirecting && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="redirect-overlay active"
                        style={{ 
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                            background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', 
                            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' 
                        }}
                    >
                        <div className="text-center">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                style={{ width: 50, height: 50, border: '2px solid var(--accent-secondary)', borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto 20px' }}
                            />
                            <h3 className="text-gradient">Redirecting to Registration</h3>
                            <p style={{ color: 'var(--text-dim)' }}>Connecting to {targetEvent} portal...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Events;
