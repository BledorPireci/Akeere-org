import "../scss/layout/_footer.scss"
import AkereeLogo from '../assets/photos/akereelogo.png';
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <a href="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={AkereeLogo} alt="" />
                    </a>
                </div>
                <div className="footerText">
                    <h2>Copyright © 2023 AKEREE. All rights reserved.</h2>
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

