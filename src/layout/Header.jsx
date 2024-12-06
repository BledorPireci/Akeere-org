import AkereeLogo from '../assets/photos/akereelogo.png';
import '../scss/layout/_header.scss';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Header = () => {
    const isHomePage = window.location.pathname === '/';
    const [activeSection, setActiveSection] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['information', 'projects', 'about-us'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || (window.scrollY === 0 ? 'home' : null));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <nav>
            <div className="htmlmenu-wrapper">
                <div className="htmlmenu-header">
                    <div className="htmlmenu-container">
                        <div className="htmlmenu-logo">
                            <Link to="/">
                                <img src={AkereeLogo} alt="htmlmenu" />
                            </Link>
                        </div>
                        <input type="checkbox" id="htmlmenu-toggle" className="htmlmenu-toggle" />
                        <label htmlFor="htmlmenu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <nav className="htmlmenu-menu htmlmenu-submenu-scale" role="navigation">
                            <ul>
                                <li>
                                    <a 
                                        href="/" 
                                        onClick={scrollToSection}
                                        className={activeSection === 'home' ? 'active' : ''}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#information" 
                                        onClick={scrollToSection}
                                        className={activeSection === 'information' ? 'active' : ''}
                                    >
                                        News and Events
                                    </a>
                                </li>
                                <li>
                                    <Link 
                                        to="/summer-school"
                                        className={window.location.pathname === '/summer-school' ? 'active' : ''}
                                    >
                                        Summer School
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/about"
                                        className={window.location.pathname === '/about' ? 'active' : ''}
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="htmlmenu-header-shadow"/>
                </div>
                <div className="htmlmenu-header-spacer"/>
            </div>
        </nav>
    );
};

export default Header;


