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
            regLink: "https://docs.google.com/forms/d/e/1FAIpQLSclVrrMnsko42QY8O6Lt8SrmGhWm0COAB2L0bam2taJUz1_Aw/viewform?usp=sharing&ouid=103627080680440398332"
        },
        {
            title: "Project Presentation",
            icon: "bi-display",
            desc: "Showcase your innovative projects and working prototypes.",
            details: ["Team of up to 3", "Working model preferred", "Interactive demonstration"],
            time: "11:00 AM",
            regLink: "https://forms.gle/cH8jzZgkadu49uL5A"
        },
        {
            title: "UI UX",
            icon: "bi-palette",
            desc: "Design intuitive and aesthetically pleasing user interfaces.",
            details: ["Individual Participation", "Focus on UX", "Figma/Adobe XD"],
            time: "01:30 PM",
            regLink: "https://forms.gle/TMnAxXoSyhW2t4PE6"
        },
        {
            title: "Tech Quiz",
            icon: "bi-question-diamond",
            desc: "Test your knowledge on the latest trends and fundamentals.",
            details: ["Team of 2", "Multiple Rounds", "Buzzer round"],
            time: "10:30 AM",
            regLink: "https://forms.gle/73jbAv4EQMiN2H5A8"
        },
        {
            title: "Code Adapt",
            icon: "bi-code-slash",
            desc: "A competitive coding challenge to solve logical problems.",
            details: ["Individual Participation", "C/C++/Java/Python", "Efficiency focus"],
            time: "02:00 PM",
            regLink: "https://forms.gle/SJP99zsch61Z9ePB6"
        }
    ];

    const nonTechnicalEvents = [
        {
            title: "IPL Auction",
            icon: "bi-trophy",
            desc: "Experience the thrill of a real-life IPL auction strategy.",
            details: ["Team of 3-4", "Budgeting & Strategy", "Build dream team"],
            time: "10:30 AM",
            regLink: "https://forms.gle/W6aJFx5XP96SAkLd9"
        },
        {
            title: "Chill and Skill",
            icon: "bi-controller",
            desc: "Relax and showcase your unique non-technical talents.",
            details: ["Individual Participation", "Fun activities", "Talent showcase"],
            time: "02:00 PM",
            regLink: "https://forms.gle/3HnED2yBdQLAwr4PA"
        }
    ];

    const [redirecting, setRedirecting] = useState(false);
    const [targetEvent, setTargetEvent] = useState("");

    const handleRegistration = (e, event) => {
        if (!event.regLink || event.regLink === "#") {
            e.preventDefault();
            return;
        }
        // Remove e.preventDefault() to let the <a> tag handle the navigation cleanly.
        // This ensures iOS and other mobile browsers don't block the popup.

        setTargetEvent(event.title);
        setRedirecting(true);

        // Automatically hide the loading overlay after a few seconds
        // so the user doesn't come back to a stuck spinner.
        setTimeout(() => {
            setRedirecting(false);
        }, 2000);
    };

    const EventCard = ({ event, index }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="col-lg-4 col-md-6 mb-4"
        >
            <div className="feature-card event-card h-100 d-flex flex-column">
                <div className="feature-icon">
                    <i className={`bi ${event.icon}`}></i>
                </div>

                <h4 style={{ marginBottom: '1rem' }}>{event.title}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, opacity: 0.7 }}>{event.desc}</p>
                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                    <a
                        href={event.regLink}
                        target="_blank"
                        rel="noopener noreferrer"
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
