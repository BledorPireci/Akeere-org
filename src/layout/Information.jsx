import React from 'react';
import Accordion from "../components/Accordion";
import clover from "../assets/photos/clover.png";
import blog1 from "../assets/photos/blogphoto.jpg";
import blog2 from "../assets/photos/discus.jpg";
import '../scss/sections/_information.scss'
import InformationCard from "../components/InformationCard";
const Information = () => {
    const accordionData = [
        { title: 'Section 1', description: 'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...' },
        { title: 'Section 2', description: 'Lorem ipsum...' },
        { title: 'Section 3', description: 'Lorem ipsum...' },
        { title: 'Section 4', description: 'Lorem ipsum...' },
    ];
    const cardData = [
        { img: blog1, type: 'BLOG', date: '03 JAN 2024', title: 'Lorem Ipsum passage', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet sed do eiusmod' },
        { img: blog2, type: 'BLOG', date: '03 JAN 2024', title: 'Lorem Ipsum passage', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet sed do eiusmod' },
    ];

    return (
        <section id="information" className="information">
            <div className="title">
                <img src={clover}/>
                <h2>Articles and Frequently asked questions</h2>
            </div>
            <div className="container">
                <div className="info-wrapper">
                    <div className="blog-section">
                        <div className="blogs-wrapper-all">
                            <InformationCard data={cardData} />
                        </div>
                    </div>
                    <div className="accordion">
                        <Accordion data={accordionData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;


