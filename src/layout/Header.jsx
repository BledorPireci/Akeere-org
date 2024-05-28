import AkereeLogo from '../assets/photos/akereelogo.png';
import '../scss/layout/_header.scss';


const Header = () => {
    return (
        <nav>
            <div className="htmlmenu-wrapper">
                <div className="htmlmenu-header">
                    <div className="htmlmenu-container">
                        <div className="htmlmenu-logo">
                            <a href="/">
                                <img src={AkereeLogo} alt="htmlmenu" />
                            </a>
                        </div>
                        <input type="checkbox" id="htmlmenu-toggle" className="htmlmenu-toggle" />
                        <label htmlFor="htmlmenu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <nav className="htmlmenu-menu htmlmenu-submenu-scale" role="navigation">
                            <ul>
                                <li className="htmlmenu-menu-current">
                                    <a href="#introduction">Home</a>
                                </li>
                                <li>
                                    <a href="#Projects">News and Events</a>
                                </li>
                                <li>
                                    <a href="#contact">Summer School</a>
                                </li>
                                <li>
                                    <a href="#contact">Projects</a>
                                </li>
                                <li>
                                    <a href="#contact">About Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="htmlmenu-header-shadow"></div>
                </div>
                <div className="htmlmenu-header-spacer"></div>
            </div>
        </nav>
    );
};

export default Header;


