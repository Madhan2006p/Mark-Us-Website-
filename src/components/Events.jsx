import React, { useState } from 'react';

const Events = () => {
    const technicalEvents = [
        {
            title: "Paper Presentation",
            icon: "bi-file-earmark-richtext",
            desc: "Present your research on emerging technologies and innovative ideas.",
            details: ["Individual or Team of 2", "Abstract submission required", "7 mins presentation + 3 mins Q&A"],
            time: "10:00 AM – 12:30 PM",
            regLink: "https://forms.gle/FTARYdDNY7DP892p6" // Placeholder link
        },
        {
            title: "Project Presentation",
            icon: "bi-display",
            desc: "Showcase your innovative projects and working prototypes.",
            details: ["Team of up to 3", "Working model preferred", "Interactive demonstration"],
            time: "11:00 AM – 01:30 PM",
            regLink: "" // Insert Google Form link here
        },
        {
            title: "UI UX",
            icon: "bi-palette",
            desc: "Design intuitive and aesthetically pleasing user interfaces.",
            details: ["Individual Participation", "Focus on Creativity & UX", "Tools: Figma/Adobe XD"],
            time: "01:30 PM – 03:00 PM",
            regLink: "" // Insert Google Form link here
        },
        {
            title: "Tech Quiz",
            icon: "bi-question-diamond",
            desc: "Test your knowledge on the latest trends and fundamentals in technology.",
            details: ["Team of 2", "Multiple Rounds", "Quick fire buzzer round"],
            time: "10:30 AM – 12:00 PM",
            regLink: "" // Insert Google Form link here
        },
        {
            title: "Code Adapt",
            icon: "bi-code-slash",
            desc: "A competitive coding challenge to solve logical problems.",
            details: ["Individual Participation", "Language: C/C++/Java/Python", "Focus on efficiency"],
            time: "02:00 PM – 03:30 PM",
            regLink: "" // Insert Google Form link here
        }
    ];

    const nonTechnicalEvents = [
        {
            title: "IPL Auction",
            icon: "bi-trophy",
            desc: "Experience the thrill of a real-life IPL auction strategy.",
            details: ["Team of 3-4", "Budgeting & Strategy", "Build your dream team"],
            time: "10:30 AM – 01:30 PM",
            regLink: "" // Insert Google Form link here
        },
        {
            title: "Chill and Skill",
            icon: "bi-controller",
            desc: "Relax and showcase your unique non-technical skills and talents.",
            details: ["Individual Participation", "Fun & Engaging activities", "Showcase your talent"],
            time: "02:00 PM – 04:00 PM",
             regLink: "" // Insert Google Form link here
        }
    ];

    const [redirecting, setRedirecting] = useState(false);
    const [targetEvent, setTargetEvent] = useState("");

    const handleRegistration = (e, event) => {
        if (!event.regLink || event.regLink === "#") {
            
            return;
        }

        e.preventDefault();
        setTargetEvent(event.title);
        setRedirecting(true);

       
        setTimeout(() => {
            window.open(event.regLink, "_blank");
            setRedirecting(false);
        }, 1800);
    };

    const RedirectLoading = () => (
        <div className={`redirect-overlay ${redirecting ? 'active' : ''}`}>
            <div className="redirect-content">
                <div className="redirect-scanner"></div>
                <div className="redirect-status">
                    <span className="status-label">ESTABLISHING_CONNECTION</span>
                    <h2 className="target-event">{targetEvent}</h2>
                    <div className="status-bar">
                        <div className="status-progress"></div>
                    </div>
                </div>
                <div className="redirect-meta">
                    <span>SECURE_HANDSHAKE_V2.6</span>
                    <span>ENCRYPTION: AES-256</span>
                </div>
            </div>
        </div>
    );

    const EventCard = ({ event, category }) => (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="event-card-premium">
                <div className="event-card-top">
                    <div className="event-icon-box">
                        <i className={`bi ${event.icon}`}></i>
                    </div>
                    <div className="event-meta">
                        <span className="meta-badge category">{category}</span>
                        <span className="meta-badge status">Live</span>
                    </div>
                </div>

                <div className="event-card-body">
                    <div className="time-tag">
                        <i className="bi bi-clock-history"></i> {event.time.split(' – ')[0]}
                    </div>
                    <h4 className="event-card-title">{event.title}</h4>
                    <p className="event-card-desc">{event.desc}</p>

                    <div className="event-card-details">
                        {event.details.map((detail, idx) => (
                            <span key={idx} className="detail-tag">
                                <i className="bi bi-check2-circle"></i> {detail}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="event-card-footer">
                    <a
                        href={event.regLink}
                        onClick={(e) => handleRegistration(e, event)}
                        className="btn-event-action"
                    >
                        Book Your Slot <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <section id="events" className="events-section">
            <div className="container">
                <div className="title-container text-center mb-5">
                    <h2 className="section-title">Symposium Events</h2>
                </div>

                {/* Technical Events */}
                <div className="event-group mb-5">
                    <div className="group-header-minimal mb-4">
                        <h3 className="category-title">
                            <span className="title-accent"></span>Tech Events
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        {technicalEvents.map((event, idx) => (
                            <EventCard key={idx} event={event} category="Technical" />
                        ))}
                    </div>
                </div>

                {/* Non-Technical Events */}
                <div className="event-group">
                    <div className="group-header-minimal mb-4">
                        <h3 className="category-title">
                            <span className="title-accent"></span>Non Tech Events
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        {nonTechnicalEvents.map((event, idx) => (
                            <EventCard key={idx} event={event} category="Non-Tech" />
                        ))}
                    </div>
                </div>
            </div>

            <RedirectLoading />
        </section>
    );
};

export default Events;
