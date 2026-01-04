import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-wrap">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <span className="footer-logo-premium">MARKUS<span style={{ opacity: 0.3 }}>26</span></span>
                            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', fontWeight: '300', maxWidth: '400px', lineHeight: '1.6' }}>
                                A legacy of technical brilliance, fostering collaboration across institutions.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-social-grid d-flex gap-4 justify-content-center justify-content-lg-end" style={{ margin: 0 }}>
                                <a href="https://www.instagram.com/msc_ss_kec?igsh=MTQ1ZjY4OGFmOTZpOQ==" className="footer-social-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="footer-social-link">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-info">
                        <div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                                &copy; 2026 <strong>Mark Us – 26</strong>. <br />
                                Organized by <span style={{ color: '#fff' }}>Association of CT-PG</span>, Dept of CT (PG), KEC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
