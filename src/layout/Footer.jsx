import "../scss/layout/_footer.scss"
import AkereeLogo from '../assets/photos/akereelogo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <Link to="/mainPage">
                        <img src={AkereeLogo} alt="" />
                    </Link>
                </div>
                <div className="footerText">
                    <h2>Copyright © 2023 AKEREE. All rights reserved.</h2>
                </div>
                <div className="footerIcons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn />
                    </div>
                    <div className="icon">
                        <FaInstagram />
                    </div>
                    <div className="icon">
                        <MdOutlineMail />
                    </div>
                </div>
            </div>
        </footer>
    );
}

