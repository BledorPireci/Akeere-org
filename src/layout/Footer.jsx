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
                        <img src={AkereeLogo} alt="" />
                    </a>
                </div>
                <div className="footerText">
                    <h2 onClick={toggleInfo} style={{ cursor: 'pointer' }}>
                        {showDeveloperInfo 
                            ? (
                                <>
                                  Developed by <span style={{ fontWeight: 'bold', color: '#1a4531' }}>Bledor Pireci</span>. Check out my portfolio at{" "}
                                  <a 
                                    href="https://www.bledorpireci.dev" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                      color: '#1a4531',
                                      textDecoration: 'underline',
                                      fontWeight: 'bold',
                                      transition: 'color 0.3s ease',
                                      position: 'relative',
                                      padding: '0 2px'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#276a4b'}
                                    onMouseOut={(e) => e.target.style.color = '#1a4531'}
                                  >
                                    www.bledorpireci.dev
                                  </a>
                                </>
                              )
                            : "Copyright © 2023 AKEREE. All rights reserved."}
                    </h2>
                </div>
                <div className="footerIcons">
                    <div className="icon">
                        <a href="https://www.facebook.com/akereeSummerSchool" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:akeree@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdOutlineMail />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

