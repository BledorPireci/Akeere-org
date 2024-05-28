import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Header from "../layout/Header";
import "../scss/_main.scss";
import Footer from "../layout/Footer";
import WhatDoWeDoSection from "../layout/WhatDoWeDo-Section";
import Slider from "../layout/Slider";
import Banner from "../layout/Banner";
import Information from "../layout/Information";
import GetInfo from "../layout/GetInfo";
import Testimonials from "../layout/Testimonials";

function AnimatedSection({ children }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(20px)',
        config: { duration: 500 }
    });

    return <animated.div style={props} ref={ref}>{children}</animated.div>;
}

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function MainPage() {
    return (
        <div>
            <Header />
            <AnimatedSection>
                <Banner />
            </AnimatedSection>
            <AnimatedSection>
                <Slider />
            </AnimatedSection>
            <AnimatedSection>
                <WhatDoWeDoSection />
            </AnimatedSection>
            <AnimatedSection>
                <GetInfo />
            </AnimatedSection>
            <AnimatedSection>
                <Information />
            </AnimatedSection>
            <AnimatedSection>
                <Testimonials />
            </AnimatedSection>
            <Footer />
        </div>
    );
}
