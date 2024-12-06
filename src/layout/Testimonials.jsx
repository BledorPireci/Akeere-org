import React from 'react';
import TestimonialCard from "../components/TestimonialCard";
import '../scss/sections/_testimonial.scss'
import clover from "../assets/photos/clover.png";
export default function Testimonials() {
    const testimonialData = [
        { description:'Gjatë pjesëmarrjes në shkollën verore 2023, thellova njohuritë për reduktimin e emetimeve të karbonit dhe mora pjesë në aktivitete interaktive me ekspertë. Krijova kontakte të reja me individë të apasionuar pas kësaj teme dhe e sugjeroj për çdo të ri të interesuar.',
            author: 'Vait Gashi'},
        { description: 'Mora pjesë në Shkollën Verore për Ndryshimet Klimatike dhe Tranzicionin e Energjisë (Nëntor 2024), ku mësova për menaxhimin e qëndrueshëm të pyjeve, biomasa si burim energjie dhe rrugën e Kosovës drejt neutralitetit karbonik.',
            author: 'Erta Krasniqi'},
        { description:'Si pjesëmarrës në shkollën verore të vitit 2022, mësova rreth ndryshimeve klimatike, shkaqeve dhe masave parandaluese. Përjetova një atmosferë bashkëpunuese, socializova me pjesëmarrës të rinj dhe vizitova një hidrocentral dhe një central me panele diellore, duke fituar njohuri të vlefshme mbi energjinë e rinovueshme.' ,
            author: 'Çlirim Vishi'},
        { description:'Ishte një kënaqësi e madhe të isha pjesë e Shkollës Verore 2024! Përgëzoj organizatorët për organizimin e shkëlqyer të aktivitetit, i cili ofroi mundësi të shkëlqyera për të mësuar dhe zhvilluar aftësitë profesionale.' ,
            author: 'Vesa Musaj'},
    ]
    return (
        <div className="testimonialSection">
            <div className="title">
                <img src={clover}/>
                <h2>Testimonials</h2>
            </div>
            <div className="testimonialWrapper">
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        description={testimonial.description}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </div>
    );
}

