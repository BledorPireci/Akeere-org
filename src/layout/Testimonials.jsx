import React from 'react';
import TestimonialCard from "../components/TestimonialCard";
import '../scss/sections/_testimonial.scss'
import clover from "../assets/photos/clover.png";
export default function Testimonials() {
    const testimonialData = [
        { description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra iaculis ante non commodo. Cras consequat iaculis massa, sagittis cursus est egestas ac',
            author: 'Mellow Acrobat'},
        { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra iaculis ante non commodo. Cras consequat iaculis massa, sagittis cursus est egestas ac',
            author: 'Giotto Di Battista'},
        { description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra iaculis ante non commodo. Cras consequat iaculis massa, sagittis cursus est egestas ac' ,
            author: 'Venceslao Nola'},
        { description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra iaculis ante non commodo. Cras consequat iaculis massa, sagittis cursus est egestas ac' ,
            author: 'Mario Vespuci'}
    ]
    return (
        <div className="testimonialSection">
            <div className="title">
                <img src={clover}/>
                <h2>What do we do!</h2>
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

