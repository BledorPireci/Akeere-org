import React from "react";
import WhatDoWeDoCard from "../components/WhatDoWeDoCard";
import "../scss/sections/_whatDoWeDo.scss";
import photo1 from '../assets/icons/renewable-energy(2).png'
import photo2 from '../assets/icons/solar-panel.png'
import photo3 from '../assets/icons/wind-turbine.png'
import clover from '../assets/photos/clover.png'
const WhatDoWeDoSection = () => {
    const cardDataArray = [
        {
            imgSrc: photo1,
            title: "Harnessing Nature's Energy",
            description: "Our wind turbine projects seamlessly harness nature's energy, driving us toward a sustainable future. " +
                "By capturing the power of the wind, we generate clean electricity while fostering environmental stewardship and community engagement. " +
                "These turbines symbolize our commitment to a greener world through innovative and responsible energy solutions."
        },
        {
            imgSrc: photo2,
            title: "Illuminating a Sustainable Future",
            description: "Embark on our solar initiatives, where advanced panels illuminate a cleaner and brighter path for future generations. " +
                "Through state-of-the-art solar technology, we are committed to sustainable energy solutions that light the way toward a greener and more radiant tomorrow."
        },
        {
            imgSrc: photo3,
            title: "Pioneering Tomorrow's Energy Landscape",
            description: "Uncover how our renewable projects shape a sustainable future with innovative, eco-friendly solutions. " +
                "By pioneering environmentally conscious initiatives, we are dedicated to forging a path towards a cleaner and more resilient tomorrow."
        }
    ];

    return (
        <div className="WhatWrapper">
            <div className="title">
                <img src={clover}/>
                <h2>What do we do!</h2>
            </div>
            <div className="containerWhatDo">
                {cardDataArray.map((cardData, index) => (
                    <WhatDoWeDoCard key={index} cardData={cardData} />
                ))}
            </div>
        </div>

    );
};

export default WhatDoWeDoSection;
