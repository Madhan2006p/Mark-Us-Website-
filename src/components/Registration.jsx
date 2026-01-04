import React from 'react';

const Registration = () => {
    return (
        <section id="registration">
            <div className="container">
                <div className="title-container text-center">
                    <h2 className="section-title">Registration Pass</h2>
                    <p className="reg-subtitle-unique">Experience the Future of Innovation</p>
                </div>

                <div className="ticket-portal-wrapper">
                    <div className="cyber-ticket">
                        {/* Ticket Main Body */}
                        <div className="ticket-main">
                            <div className="ticket-decoration">MARKUS – 26</div>
                            <div className="ticket-content">
                                <div className="event-meta-row">
                                    <span className="entry-tag">VIBE: TECH & INNOVATION</span>
                                    <span className="entry-status">REGISTRATION OPEN</span>
                                </div>
                                <h3 className="ticket-event-name">MARKUS -26 SYMPOSIUM</h3>
                                <p className="ticket-desc">
                                    Step into the elite circle of technology. Join us for a day of competitive coding, paper presentations, and technical breakthroughs.
                                </p>
                                <div className="ticket-footer">
                                    <a href="#events" className="btn-ticket-action">
                                        <i className="bi bi-ticket-perforated-fill"></i> GET YOUR PASS
                                    </a>
                                    <div className="payment-labels">
                                        <i className="bi bi-wallet2"></i> GPAY • UPI
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Perforation Line */}
                        <div className="ticket-divider">
                            <div className="dash-line"></div>
                            <div className="punch-hole top"></div>
                            <div className="punch-hole bottom"></div>
                        </div>

                        {/* Ticket Stub (QR Side) */}
                        <div className="ticket-stub">
                            <div className="stub-inner">
                                <div className="qr-portal-box">
                                    <img
                                        src="/images/registration-qr.png"
                                        alt="QR Code"
                                        className="stub-qr"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <i className="bi bi-qr-code-scan stub-qr-icon" style={{ display: 'none' }}></i>
                                </div>
                                <div className="stub-info">
                                    <span className="stub-label">ADMIT ONE</span>
                                    <div className="stub-data">
                                        <span className="stub-date">24 Jan</span>
                                        <span className="stub-year">2026</span>
                                    </div>
                                    <div className="serial-number">MSC-PASS-2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Registration;
