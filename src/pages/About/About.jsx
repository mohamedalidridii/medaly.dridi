import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>1995</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/medaly1.jpeg" alt="" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
            I’m Med Ali — a digital creator and founder of KOYOTEC, a creative agency where design meets technology. I craft immersive web experiences that are visually striking, emotionally engaging, and built with precision.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
            For me, building digital experiences isn't just about beautiful visuals — it's about emotion, clarity, and storytelling. I believe in using animation, interactivity, and creative code to create memorable user journeys.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
            Each project is a new opportunity to innovate, inspire, and connect. Whether it's a portfolio, a brand site, or a digital campaign — I bring passion, detail, and a modern edge to every pixel.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="" />
            </div>
            <p className="primary">Designed with Purpose</p>
          </div>
          <div className="services-col">
            <h4>
            Every project is an opportunity to push boundaries — blending design, code, and strategy to tell impactful digital stories. I approach each build with creativity, precision, and innovation.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Web Design & Development</h5>
                </div>
                <div className="service-list-col">
                  <p>
                  From sleek landing pages to fully custom websites, I design and build digital experiences using modern tools like React, Next.js, GSAP, and Tailwind — ensuring fast performance and visual flair.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p>
                  I lead projects with a strong creative vision — aligning brand identity, user experience, and visual storytelling to bring ideas to life across digital platforms.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Interactive & Motion Design</h5>
                </div>
                <div className="service-list-col">
                  <p>
                  I specialize in smooth, immersive animations using GSAP, ScrollTrigger, and Three.js — turning static interfaces into dynamic stories that engage users and leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Daily Stack
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Favourite Tools
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              I use a modern stack combining design precision and creative technology — from Figma to GSAP, always choosing tools that bring ideas to life with performance and emotion.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="" />
                </div>
                <h4>Next.js</h4>
                <p className="primary sm">App Routing & Performance</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="" />
                </div>
                <h4>GSAP</h4>
                <p className="primary sm">Animations & Interactivity</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="" />
                </div>
                <h4>Figma</h4>
                <p className="primary sm">UI Design & Prototyping</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
