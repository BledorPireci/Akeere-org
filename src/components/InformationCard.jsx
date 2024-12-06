import React from 'react';
import PropTypes from "prop-types";
import '../scss/components/_informationCard.scss'

const InformationCard = ({ data, onBlogClick }) => {
    return (
        <div className="blogs-wrapper-all">
            {data.map((card, index) => (
                <div 
                    className="blog-card" 
                    key={index}
                    onClick={() => onBlogClick(card.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="img-blog">
                        <img src={card.img} alt={`Card ${index}`} />
                    </div>
                    <div className="text-blog">
                        <h4>{card.type} · {card.date}</h4>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

InformationCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onBlogClick: PropTypes.func.isRequired,
};

export default InformationCard;


