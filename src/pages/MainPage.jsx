import React, { useEffect } from 'react';
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
import SummerSchoolAnnouncement from '../components/SummerSchoolAnnouncement';
import posthog from 'posthog-js';

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
    useEffect(() => {
        posthog.capture('main_page_view', {
            page_name: 'Home',
            timestamp: new Date().toISOString(),
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            referrer: document.referrer || 'direct',
            language: navigator.language
        });
    }, []);

    // Track scroll depth
    useEffect(() => {
        let maxScroll = 0;
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > maxScroll) {
                maxScroll = scrollPercentage;
                if (maxScroll >= 25 && maxScroll < 50) {
                    posthog.capture('scroll_depth', { depth: '25%' });
                } else if (maxScroll >= 50 && maxScroll < 75) {
                    posthog.capture('scroll_depth', { depth: '50%' });
                } else if (maxScroll >= 75 && maxScroll < 90) {
                    posthog.capture('scroll_depth', { depth: '75%' });
                } else if (maxScroll >= 90) {
                    posthog.capture('scroll_depth', { depth: '90%' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Header />
            <AnimatedSection>
                <Banner />
            </AnimatedSection>
            <SummerSchoolAnnouncement />
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
