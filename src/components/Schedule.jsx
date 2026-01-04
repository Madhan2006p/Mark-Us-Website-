import React from 'react';

const Schedule = () => {
    return (
        <section id="schedule" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <br></br>
                    <h2 className="section-title">Schedule & Venues</h2>
                    <p className="section-subtitle">Plan your day smart and make the most of every event.</p>
                </div>

                <div className="row g-4">
                    {/* Timeline Schedule */}
                    <div className="col-lg-8">
                        <div className="schedule-timeline-wrapper">
                            <div className="timeline-container">
                                {/* Timeline Item 1 */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">
                                        <i className="bi bi-clipboard-check"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">08:45 AM</div>
                                        <h5 className="timeline-title">Reporting & Registration</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> MBA-MCA Block Lobby</p>
                                        <span className="timeline-badge badge-morning">Reporting</span>
                                    </div>
                                </div>

                                {/* Timeline Item 2 */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">
                                        <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">09:30 AM</div>
                                        <h5 className="timeline-title">Inauguration Ceremony</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> Seminar Hall A</p>
                                        <span className="timeline-badge badge-opening">Opening</span>
                                    </div>
                                </div>

                                {/* Combined Technical Sessions */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">
                                        <i className="bi bi-cpu"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">10:00 AM - 12:30 PM</div>
                                        <h5 className="timeline-title">Technical Track Sessions</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> Multiple Labs & Halls</p>
                                        <div className="compact-session-list" style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                                            • Paper Presentation (Seminar Hall B)<br />
                                            • Tech Quiz & IPL Auction (Lab 1)<br />
                                            • Project Presentation (Main Lab)
                                        </div>
                                        <span className="timeline-badge badge-competition mt-2">Competitions</span>
                                    </div>
                                </div>

                                {/* Lunch Break */}
                                <div className="timeline-item timeline-item-break">
                                    <div className="timeline-marker">
                                        <i className="bi bi-cup-hot"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">01:00 PM</div>
                                        <h5 className="timeline-title">Lunch Break</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> Cafeteria</p>
                                        <span className="timeline-badge badge-break">Break</span>
                                    </div>
                                </div>

                                {/* Afternoon Sessions */}
                                <div className="timeline-item">
                                    <div className="timeline-marker">
                                        <i className="bi bi-stars"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">01:30 PM - 03:30 PM</div>
                                        <h5 className="timeline-title">Skills & Innovation Track</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> Design Lab / Lab 2</p>
                                        <div className="compact-session-list" style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                                            • UI UX Design Sprint<br />
                                            • Code Adapt & Chill-Skill
                                        </div>
                                        <span className="timeline-badge badge-afternoon mt-2">Interactive</span>
                                    </div>
                                </div>

                                {/* Final Item */}
                                <div className="timeline-item timeline-item-final">
                                    <div className="timeline-marker">
                                        <i className="bi bi-award"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-time">04:00 PM</div>
                                        <h5 className="timeline-title">Valedictory & Prize Giving</h5>
                                        <p className="timeline-venue"><i className="bi bi-geo-alt-fill"></i> Auditorium</p>
                                        <span className="timeline-badge badge-closing">Grand Finale</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guidelines & Info Card */}
                    <div className="col-lg-4">
                        <div className="schedule-info-card">
                            <div className="info-card-header">
                                <i className="bi bi-info-circle-fill"></i>
                                <h4>Important Guidelines</h4>
                            </div>
                            <div className="info-card-body">
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-clock-history"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Reporting Time</h6>
                                        <p>Participants must report by 08:45 AM at the registration desk.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-card-checklist"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>ID Card Required</h6>
                                        <p>College ID card is mandatory for entry to all venues.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Personal Devices</h6>
                                        <p>Use of personal laptops allowed for Coding/Design events.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-phone"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Mobile Phones</h6>
                                        <p>Ensure your phones are on silent mode during sessions.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Code of Conduct</h6>
                                        <p>Strict adherence to the code of conduct is expected.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-ticket-perforated"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Registration Pass</h6>
                                        <p>Keep a digital or printed copy of your registration pass ready.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-person-badge-fill"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Formal Attire</h6>
                                        <p>Decent casual or formal attire is expected for presentations.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-cup-straw"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Lunch & Refreshments</h6>
                                        <p>Lunch will be served at the cafeteria for all participants.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-award-fill"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Certificates</h6>
                                        <p>Participation e-certificates will be issued after the event.</p>
                                    </div>
                                </div>
                                <div className="guideline-item">
                                    <div className="guideline-icon">
                                        <i className="bi bi-headset"></i>
                                    </div>
                                    <div className="guideline-content">
                                        <h6>Technical Help</h6>
                                        <p>Contact event volunteers for any software/hardware issues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
