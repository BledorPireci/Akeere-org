import React from 'react';
import {useInView} from "react-intersection-observer";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import Blog from "../components/Blog";
import SummerSchoolAnnouncement from '../components/SummerSchoolAnnouncement';
import "../scss/sections/_summerSchool.scss"
import Header from "../layout/Header";
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

export default function SummerSchool() {
    React.useEffect(() => {
        posthog.capture('summer_school_page_view', {
            page_name: 'Summer School',
            timestamp: new Date().toISOString()
        });
    }, []);

    return (
        <div className="summer-school">
            <Header/>
            <SummerSchoolAnnouncement />
            <AnimatedSection>
                <div className="summer-school-content">
                    <Blog/>
                </div>
            </AnimatedSection>
        </div>
    );
}
