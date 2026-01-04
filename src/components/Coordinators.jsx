import React from 'react';

const Coordinators = () => {
    return (
        <section id="coordinators">
            <div className="container">
                <div className="title-container">
                    <br></br>
                    <h2 className="section-title">Our Team</h2>
                </div>

                {/* Faculty Advisor */}
                <div className="coordinator-group mb-5">
                    <div className="group-header-minimal">
                        <span className="group-accent"></span>
                        <h3 className="group-title">Faculty Mentor</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="coord-card-wide faculty">
                                <div className="coord-wide-inner">
                                    <div className="coord-avatar-box">
                                        <div className="coord-avatar">
                                            <span>Pf.</span>
                                        </div>
                                        <div className="avatar-glow"></div>
                                    </div>
                                    <div className="coord-info-box">
                                        <div className="coord-meta">
                                            <span className="role-badge">Event Convenor</span>
                                        </div>
                                        <h4 className="coord-name">Prof. Arumugam</h4>
                                        <p className="coord-bio">
                                            Guiding the technical and organizational vision of Markus-26 with decades of expertise.
                                        </p>
                                        <div className="coord-action">
                                            <a href="tel:+919876543210" className="btn-connect">
                                                <i className="bi bi-telephone-plus"></i> Connect
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Secretaries */}
                <div className="coordinator-group">
                    <div className="group-header-minimal">
                        <span className="group-accent"></span>
                        <h3 className="group-title">Student Secretaries</h3>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="coord-card-wide student">
                                <div className="coord-wide-inner">
                                    <div className="coord-avatar-box">
                                        <div className="coord-avatar">
                                            <img src="/images/rp.jpg" alt="Rithanya Paramashivam" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span>RP</span>' }} />
                                        </div>
                                        <div className="avatar-glow"></div>
                                    </div>
                                    <div className="coord-info-box">
                                        <div className="coord-meta">
                                            <span className="role-badge">Main Secretary</span>
                                        </div>
                                        <h4 className="coord-name">Rithanya Paramashivam</h4>
                                        <p className="coord-bio">Managing team logistics and event execution with precision.</p>
                                        <div className="coord-action">
                                            <a href="tel:+919876543210" className="btn-connect">
                                                <i className="bi bi-telephone-plus"></i> Connect
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="coord-card-wide student">
                                <div className="coord-wide-inner">
                                    <div className="coord-avatar-box">
                                        <div className="coord-avatar">
                                            <span>NK</span>
                                        </div>
                                        <div className="avatar-glow"></div>
                                    </div>
                                    <div className="coord-info-box">
                                        <div className="coord-meta">
                                            <span className="role-badge">Additional Secretary</span>
                                        </div>
                                        <h4 className="coord-name">Naveen Kumar</h4>
                                        <p className="coord-bio">Leading technical coordination and digital infrastructure.</p>
                                        <div className="coord-action">
                                            <a href="tel:+919876543210" className="btn-connect">
                                                <i className="bi bi-telephone-plus"></i> Connect
                                            </a>
                                        </div>
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

export default Coordinators;
