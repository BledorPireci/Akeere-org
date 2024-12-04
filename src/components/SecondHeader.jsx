import AkereeLogo from '../assets/photos/akereelogo.png';
import '../scss/layout/_header.scss';
import {Link} from "react-router-dom";


const Header = () => {
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
                                    <Link 
                                        to="/"
                                        className={window.location.pathname === '/' && !window.location.hash ? 'active' : ''}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/#information"
                                        className={window.location.hash === '#information' ? 'active' : ''}
                                    >
                                        News and Events
                                    </Link>
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
                                        to="/#projects"
                                        className={window.location.hash === '#projects' ? 'active' : ''}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/#about-us"
                                        className={window.location.hash === '#about-us' ? 'active' : ''}
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


