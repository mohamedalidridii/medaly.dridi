import React from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import { Link } from "react-router";

const Project = () => {
  return (
    <ReactLenis root>
      <div className="page forkitC">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Speaker
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            Fork it! Community
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/project/fork-it.jpg" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h5" animateOnScroll={true}>
            Presented my research and development of a hybrid machine learning model (CNNs and RNNs) for the early detection of scleroderma.
            Shared the technical challenges and innovative solutions employed,
            including feature engineering and model validation strategies.
            Engaged with fellow developers and researchers,
            seeking collaboration and feedback to further refine the model.
            Also participated in other presentations,
            expanding my knowledge of current trends in IT field.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Date
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              05 April 2025
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              HealthTech, Machine learning
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Conference
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              30 mins
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Skills
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
            public speaking
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/fork-it1.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/fork-it2.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/fork-it3.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/fork-it4.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <Link to="https://www.instagram.com/p/DIGl1nWIzp6/">
                <ParallaxImage src="https://www.shutterstock.com/shutterstock/videos/3608709143/thumb/6.jpg?ip=x480" alt="" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Website Event
            </AnimatedCopy>
            <Link to="https://www.forkit.community/people/mohamed-ali-dridi" className="underline">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Click here
            </AnimatedCopy>
            </Link>
          </div>
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              LinkedIn Post
            </AnimatedCopy>
            <Link to="https://www.linkedin.com/posts/med-ali-dridi_forkit-sclerodermaawareness-machinelearningforhealth-activity-7314603386123825152-gTfX?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRrszUBAUYGl0sjFSBJ3B_MX7a-cccx4yU" className="underline">
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
          <Link>
          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Orbit 1.0
          </AnimatedCopy>
          </Link>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
