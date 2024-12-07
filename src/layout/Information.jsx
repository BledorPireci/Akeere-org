import React from 'react';
import Accordion from "../components/Accordion";
import clover from "../assets/photos/clover.png";
import blog2 from "../assets/photos/Blogs/blog-6.png";
import '../scss/sections/_information.scss'
import InformationCard from "../components/InformationCard";
import { useNavigate } from 'react-router-dom';
import blog1 from "../assets/photos/Blogs/blog-1.jpg"
const Information = () => {
    const accordionData = [
        { title: 'Cilat janë qëllimet kryesore të organizatave si AKEREE?', 
          description: 'AKEREE synon promovimin e energjive të ripërtëritshme, efiçiencën e energjisë, edukimin e publikut dhe reformat politike në mbrojtje të mjedisit dhe zhvillimit të qëndrueshëm.' 
        },
        { title: 'Çfarë temash trajtohen zakonisht në eventet edukative për energjinë dhe efiçiencën?', 
          description: 'Eventet fokusohen në tranzicionin energjetik, politikat klimatike, teknologjitë e ripërtëritshme, efiçiencën energjetike dhe qasjet për qëndrueshmëri mjedisore.' 
        },
        { title: 'Si kontribuojnë këto organizata në përpjekjet globale për energji të qëndrueshme dhe ripërtëritshme?', 
          description: 'Ato promovojnë energjinë e qëndrueshme, avokojnë për reforma, bashkëpunojnë ndërkombëtarisht dhe mbështesin zgjidhje inovative për tranzicionin energjetik.' 
        },
        { title: 'Çfarë aktivitete praktike ofrohen gjatë programeve edukative mbi energjinë dhe ndryshimet klimatike?', 
          description: 'Programet përfshijnë vizita në terren, punëtori në grup, diskutime për rastet studimore dhe aktivitete për planifikimin energjetik dhe strategjitë klimatike.' 
        },
    ];
    const cardData = [
        {
            id: 1,
            img: blog1, 
            type: 'BLOG',
            date: '03 NËN 2022', 
            title: 'Promovimi i Veprimeve për Ndryshimet Klimatike te të Rinjët',
            description: 'Takim me të rinjtë e Prizrenit për të diskutuar shkaqet, rreziqet dhe veprimet për zbutjen dhe përshtatjen ndaj ndryshimeve klimatike.'
        },
        {
            id: 2,
            img: blog2,
            type: 'BLOG',
            date: '14 MAR 2023',
            title: 'Prezantimi i Studimit për Reduktimin e Emetimeve në Rahovec',
            description: 'Fotot e prezantimit të studimit për Rahovecin 2050 autoriteteve komunale dhe Kryetarit të Komunës së Rahovecit, z. Smajl Latifi.'
        }        
    ];

    const handleBlogClick = (infoBlogId) => {
        window.location.href = `/information-blog/${infoBlogId}`;
    };

    return (
        <section id="information" className="information">
            <div className="title">
                <img src={clover}/>
                <h2>Artikuj dhe Pyetje të Shpeshta.</h2>
            </div>
            <div className="container">
                <div className="info-wrapper">
                    <div className="blog-section">
                        <div className="blogs-wrapper-all">
                            <InformationCard data={cardData} onBlogClick={handleBlogClick} />
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

