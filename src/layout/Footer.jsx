import "../scss/layout/_footer.scss"
import AkereeLogo from '../assets/photos/akereelogo.png';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
    const [showDeveloperInfo, setShowDeveloperInfo] = useState(false);
    
    const toggleInfo = () => {
        setShowDeveloperInfo(!showDeveloperInfo);
    };

    return (
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <a href="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={AkereeLogo} alt="Akeree Logo" />
                    </a>
                </div>
                <div className="contact-section">
                    <h3>Contact Information</h3>
                    <div className="contact-list">
                        <div className="contact-item">
                            <span>Phone:</span>
                            <a href="tel:+38344413241">+383 44 413 241</a>
                            <span className="separator">|</span>
                            <a href="tel:+38344149589">+383 44 149 589</a>
                        </div>
                        <div className="contact-item">
                            <span>Email:</span>
                            <a href="mailto:akeree@akeree.org">akeree@akeree.org</a>
                            <span className="separator">|</span>
                            <a href="https://www.facebook.com/akereeSummerSchool" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="facebook-link">
                                <span className="fb-icon">
                                    <FaFacebookF />
                                </span>
                                <span className="fb-text">Find us on Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p onClick={toggleInfo}>
                        {showDeveloperInfo 
                            ? (
                                <>
                                    Developed by <span className="developer-name">Bledor Pireci</span>. 
                                    Check out my portfolio at{" "}
                                    <a 
                                        href="https://www.bledorpireci.dev" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="portfolio-link"
                                    >
                                        www.bledorpireci.dev
                                    </a>
                                </>
                            )
                            : "Copyright © 2025 AKEREE. All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
}

