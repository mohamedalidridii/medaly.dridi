import React from "react";
import "./Oreily.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import { Link } from "react-router";

const Oreily = () => {
  return (
    <ReactLenis root>
      <div className="page Oreilly">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
           Official Community Partner
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            O&apos;Reilly Media
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/project/ls.png" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h5" animateOnScroll={true}>
          I&apos;m incredibly proud to announce a landmark partnership with O&apos;Reilly Media, the global leader in technology and business learning. This collaboration is a monumental achievement, establishing me (Mohamed Ali Dridi) as the first Arab content creator to join O&apos;Reilly&apos;s prestigious network of international experts. Our partnership is a powerful step toward bridging the knowledge gap, bringing our specialized expertise in DevOps to a global audience of millions on the O&apos;Reilly online learning platform, while simultaneously elevating the presence and quality of Arabic technical content on the international stage.  
	  </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Date  
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Education
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Ojectives
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Ressources
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Sectors
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              IT Enthusiasts from All specialities
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/ls.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Website Event
            </AnimatedCopy>
            <Link
              to="https://www.localhost-community.tech"
              className="underline"
            >
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                Click here
              </AnimatedCopy>
            </Link>
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            02 - 05
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next
          </AnimatedCopy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
            <Link to="/Orbit-Event">
              <ParallaxImage src="/project/orbit.jpg" alt="" />
              </Link>

            </div>
          </div>

            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Orbit 1.0
            </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Oreily);
