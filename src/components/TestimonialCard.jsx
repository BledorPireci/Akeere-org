import chat from '../assets/icons/chat.png'
import profile from '../assets/icons/profile.png'
import '../scss/components/_testimonialCard.scss'
import PropTypes from 'prop-types';
export default function TestimonialCard({ description, author }) {
    return (
        <div className="testimonialCard">
            <div className="cardPhoto">
                <img src={chat} alt="chat"/>
            </div>
            <div className="cardText">
                <p>{description}</p>
            </div>
            <div className="cardAuthor">
                <div className="imgWrapper">
                    <img src={profile} alt="profile"/>
                </div>
                <h3>{author}</h3>
            </div>
        </div>
    );
}
TestimonialCard.propTypes = {
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

