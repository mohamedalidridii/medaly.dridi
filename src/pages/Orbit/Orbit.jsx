import React from "react";
import "./Orbit.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import { Link } from "react-router";

const Orbit = () => {
  return (
    <ReactLenis root>
      <div className="page orbitC">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Tech Educator
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Orbit 1.0
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/project/Orbit1.jpg" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h5" animateOnScroll={true}>
              Designed and delivered a comprehensive "Docker 101" workshop for
              55 participants at Orbit 1.0, organized by the IEEE INSAT Computer
              Society Chapter. Covered core Docker concepts, including Docker
              objects, containerization principles, and practical application
              scenarios. Provided hands-on demonstrations and facilitated
              interactive sessions to enhance participants' understanding and
              practical skills. Explored the evolution of DevOps and Docker's
              role in modern software development workflows, tracing its roots
              from the 2008 DevOps concept. Received positive feedback for clear
              instruction and effective knowledge transfer. Focused on
              empowering participants to begin building and deploying
              containerized applications. Facilitated a feedback session to
              gather reviews and improve future workshops.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Date
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              12 April 2025
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              DevOps
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Conference
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              4 hours
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Skills
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Devops, Docker
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/orbit.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/orbit2.jpg" alt="" />
              </div>
            </div>
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/orbit3.jpg" alt="" />
              </div>
            </div>


            <div className="project-img">
              <div className="project-img-wrapper">
                <Link to="https://www.instagram.com/p/DIZP1WNIdMK/">
                  <ParallaxImage
                    src="https://www.shutterstock.com/shutterstock/videos/3608709143/thumb/6.jpg?ip=x480"
                    alt=""
                  />
                </Link>
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
              to="https://orbit.tn/"
              className="underline"
            >
              <AnimatedCopy tag="h4" animateOnScroll={true}>
                Click here
              </AnimatedCopy>
            </Link>
          </div>
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              LinkedIn Post
            </AnimatedCopy>
            <Link
              to="https://www.linkedin.com/posts/med-ali-dridi_forkit-sclerodermaawareness-machinelearningforhealth-activity-7314603386123825152-gTfX?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRrszUBAUYGl0sjFSBJ3B_MX7a-cccx4yU"
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
            <Link to="/Forkit-Community">
              <ParallaxImage src="/project/fork-it4.jpg" alt="" />
              </Link>

            </div>
          </div>

            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Fork it! Community
            </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Orbit);
