
import photo4 from '../assets/icons/plant-leaf.png'
import "../scss/components/_whatDoWeDoCard.scss"
import PropTypes from "prop-types";

const WhatDoWeDoCard = ({ cardData }) => {
    const { imgSrc, title, description } = cardData;

    return (
        <div className="card">
            <div className="cardWrapper">
                <div className="imgContainer">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="texts">
                    <div className="cardTitle">
                        <h3>{title}</h3>
                    </div>
                    <div className="descrip">
                        <h5>{description}</h5>
                    </div>
                </div>
            </div>
            <div className="leaf">
                <img src={photo4}/>
            </div>
        </div>
    );
};

WhatDoWeDoCard.propTypes = {
    cardData: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default WhatDoWeDoCard;

