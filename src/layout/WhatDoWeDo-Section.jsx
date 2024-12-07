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
            title: "Promovimi i Energjisë së Ripërtëritshme",
            description: "Ne punojmë për të promovuar përdorimin e burimeve të ripërtëritshme të energjisë (BRE) dhe " +
                "efiçiencën e energjisë. Përmes ekspertizës sonë, ne kontribuojmë në zhvillimin e politikave të " +
                "qëndrueshme energjetike dhe mbrojtjen e mjedisit jetësor."
        },
        {
            imgSrc: photo2,
            title: "Efiçienca e Energjisë",
            description: "Fokusohemi në edukimin dhe implementimin e praktikave për shfrytëzimin racional të energjisë " +
                "në ndërtesa dhe industri. Ne ofrojmë zgjidhje për kursimin e energjisë dhe aplikimin e rregullave " +
                "ndërtimore për efiçiencë energjetike."
        },
        {
            imgSrc: photo3,
            title: "Bashkëpunimi dhe Zhvillimi",
            description: "Krijojmë ura bashkëpunimi me institucione vendore dhe ndërkombëtare në fushën e energjisë " +
                "së ripërtëritshme. Angazhohemi në reformat e politikave fiskale dhe gjetjen e fondeve për zhvillimin " +
                "e projekteve të BRE dhe EE."
        }
    ];

    return (
        <div className="WhatWrapper">
            <div className="title">
                <img src={clover}/>
                <h2>Çfarë bëjmë?!</h2>
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
