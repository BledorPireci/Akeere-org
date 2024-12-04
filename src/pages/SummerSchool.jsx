import React from 'react';
import {useInView} from "react-intersection-observer";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import Blog from "../components/Blog";
import "../scss/sections/_summerSchool.scss"
import SecondHeader from "../components/SecondHeader";

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
    return (
        <div className="summer-school">
            <SecondHeader />
            <AnimatedSection>
                <Blog/>
            </AnimatedSection>
        </div>
    );
}
