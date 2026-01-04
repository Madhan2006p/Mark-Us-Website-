import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer-section">
            <div className="container">
                <div className="row g-4">
                    {/* Brand Column */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-brand">
                            <h3 className="footer-logo">
                                <i className="bi bi-cpu-fill me-2"></i>Mark Us – 26
                            </h3>
                            <p className="footer-description">
                                An Intra-Department One-Day Symposium organized by the Department of Computer Technology (PG).
                                Join us for a day of innovation, competition, and learning.
                            </p>
                            <div className="footer-tagline">
                                <p className="mb-0">
                                    <i className="bi bi-quote"></i>
                                    <em>Ignite Your Skills. Inspire Your Future.</em>
                                </p>
                            </div>
                            <div className="social-links mt-4">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/msc_ss_kec?igsh=MTQ1ZjY4OGFmOTZpOQ==" className="social-link" aria-label="Instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>

                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Navigation</h5>
                        <ul className="footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#schedule">Schedule</a></li>
                            <li><a href="#coordinators">Team</a></li>
                            <li><a href="#registration">Register</a></li>
                        </ul>
                    </div>

                    {/* Events Column */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Symposium Events</h5>
                        <ul className="footer-links">
                            <li><a href="#events"><i className="bi bi-file-earmark-richtext me-2"></i>Paper Presentation</a></li>
                            <li><a href="#events"><i className="bi bi-easel me-2"></i>Project Presentation</a></li>
                            <li><a href="#events"><i className="bi bi-palette me-2"></i>UI/UX Design</a></li>
                            <li><a href="#events"><i className="bi bi-question-diamond me-2"></i>Tech Quiz</a></li>
                            <li><a href="#events"><i className="bi bi-code-slash me-2"></i>Code Adapt</a></li>
                            <li><a href="#events"><i className="bi bi-person-check me-2"></i>IPL Auction</a></li>
                            <li><a href="#events"><i className="bi bi-controller me-2"></i>Chill & Skill</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Get In Touch</h5>
                        <ul className="footer-contact">
                            <li>
                                <i className="bi bi-geo-alt-fill"></i>
                                <span>MBA-MCA Block, Department of Computer Technology-PG<br />College Campus</span>
                            </li>
                            <li>
                                <i className="bi bi-calendar-event"></i>
                                <span><strong>Date:</strong> Jan 24, 2026</span>
                            </li>
                            <li>
                                <i className="bi bi-clock"></i>
                                <span><strong>Time:</strong> 08:45 AM - 04:15 PM</span>
                            </li>
                            <li>
                                <i className="bi bi-telephone-fill"></i>
                                <span>+91 93457 48455</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom - Signature Ribbon */}
                <div className="footer-bottom">
                    <div className="signature-ribbon">
                        <div className="row align-items-center g-3">
                            <div className="col-md-6 text-center text-md-start">
                                <p className="copyright-clean">
                                    &copy; 2026 <strong>Mark Us – 26</strong>. <span className="rights-tag">All rights reserved.</span>
                                </p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="designer-credit">
                                    <span className="credit-label">Designed By</span>
                                    <a href="https://www.instagram.com/pradeepdhass_r/" target="_blank" rel="noopener noreferrer" className="creator-name-link">
                                        Pradeepdhass R
                                    </a>
                                    <span className="dept-suffix">| Dept. of CT (PG)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
