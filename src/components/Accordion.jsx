import React, { useState } from 'react';
import "../scss/components/_accordion.scss"
import Brackets from '../assets/vectors/Vector(2).png'
import plus from '../assets/vectors/plus-circle.png'
import PropTypes from 'prop-types';

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        
        <div className="accordion-wrapper">
            {data.map((section, index) => (
                <div className="accordion-btn-wrapper" key={index}>
                    <button
                        className={`accordion-btn ${openIndex === index ? 'active' : ''}`}
                        onClick={() => handleToggle(index)}
                    >
                        <img className="btn-accordion-right-icon" src={Brackets} alt="Brackets Icon" />
                        <span>{section.title}</span>
                        <img src={plus} className="btn-accordion-left-icon" alt="Plus Icon" />
                    </button>
                    {openIndex === index && (
                        <div className="panel active">
                            <div className="panel-content">
                                <p>{section.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

Accordion.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Accordion;
