import React from "react";
import "./Localhost.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import { Link } from "react-router";

const Localhost = () => {
  return (
    <ReactLenis root>
      <div className="page localC">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
           community founder
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Localhost community Tunisia
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
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              When I launched Localhost, it started as a simple idea: what if IT enthusiasts across the Arab world had a place to connect, share knowledge, and grow together?

Today, that idea has become a thriving community of more than 25,000 members across Instagram, Discord, and TikTok.

Localhost isn’t just about technology—it’s about people learning side by side, supporting one another, and breaking the isolation that often comes with studying or working in IT. Every discussion, workshop, and shared resource is a step toward building a culture of collaboration and empowerment in our region.

For me, Localhost is more than a community—it’s proof that when we learn together, we go further.
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
              Blog/Resources
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Ojectives
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Networking - Help - Ressources
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

export default Transition(Localhost);
