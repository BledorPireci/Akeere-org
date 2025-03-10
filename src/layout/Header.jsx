import AkereeLogo from '../assets/photos/akereelogo.png';
import '../scss/layout/_header.scss';
import {Link, useNavigate, useLocation} from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [activeSection, setActiveSection] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : '';
            return !prev;
        });
    };

    const handleNavigation = (path, event) => {
        event.preventDefault();
        if (isMenuOpen) {
            document.body.style.overflow = '';
            setIsMenuOpen(false);
        }
        window.scrollTo(0, 0);
        navigate(path);
    };

    const handleLinkClick = (event) => {
        const href = event.currentTarget.getAttribute('href');
        
        if (href === '/') {
            event.preventDefault();
            window.scrollTo(0, 0);
            navigate('/');
            if (isMenuOpen) {
                toggleMenu();
            }
        } else if (href.startsWith('#') && isHomePage) {
            scrollToSection(event);
            if (isMenuOpen) {
                toggleMenu();
            }
        }
    };

    const handleNewsEventsClick = (event) => {
        event.preventDefault();
        
        if (!isHomePage) {
            if (isMenuOpen) {
                document.body.style.overflow = '';
                setIsMenuOpen(false);
            }
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('information');
                if (element) {
                    const offset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            if (isMenuOpen) {
                document.body.style.overflow = '';
                setIsMenuOpen(false);
            }
            scrollToSection(event);
        }
    };

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection(null);
            return;
        }

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
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

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

    const isLinkActive = (path) => {
        if (path === '/') {
            return isHomePage && (activeSection === 'home' || !activeSection);
        }
        return location.pathname === path;
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = '';
            setIsMenuOpen(false);
        }
    }, [location.pathname]);

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Link to="/" onClick={(e) => handleNavigation('/', e)}>
                            <img src={AkereeLogo} alt="Logo" />
                        </Link>
                    </div>
                    
                    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a 
                                    href="/" 
                                    onClick={handleLinkClick}
                                    className={isLinkActive('/') ? 'nav__link nav__link--active' : 'nav__link'}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="#information" 
                                    onClick={handleNewsEventsClick}
                                    className={activeSection === 'information' ? 'nav__link nav__link--active' : 'nav__link'}
                                >
                                    News and Events
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="/summer-school"
                                    onClick={(e) => handleNavigation('/summer-school', e)}
                                    className={isLinkActive('/summer-school') ? 'nav__link nav__link--active' : 'nav__link'}
                                >
                                    Summer School
                                </a>
                            </li>
                            <li className="nav__item">
                                <a 
                                    href="/about"
                                    onClick={(e) => handleNavigation('/about', e)}
                                    className={isLinkActive('/about') ? 'nav__link nav__link--active' : 'nav__link'}
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-menu__nav">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item">
                            <a 
                                href="/" 
                                onClick={handleLinkClick}
                                className={isLinkActive('/') ? 'active' : ''}
                            >
                                Home
                            </a>
                        </li>
                        <li className="mobile-menu__item">
                            <a 
                                href="#information" 
                                onClick={handleNewsEventsClick}
                                className={activeSection === 'information' ? 'active' : ''}
                            >
                                News and Events
                            </a>
                        </li>
                        <li className="mobile-menu__item">
                            <a 
                                href="/summer-school"
                                onClick={(e) => handleNavigation('/summer-school', e)}
                                className={isLinkActive('/summer-school') ? 'active' : ''}
                            >
                                Summer School
                            </a>
                        </li>
                        <li className="mobile-menu__item">
                            <a 
                                href="/about"
                                onClick={(e) => handleNavigation('/about', e)}
                                className={isLinkActive('/about') ? 'active' : ''}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;