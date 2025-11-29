import workList from "../../data/workList";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
 const heroImage = isDesktop ? '/home/medaly1.jpg' : '/home/medaly.jpg';
	useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    if (!stickySection || titles.length !== 3) {
      window.removeEventListener("resize", handleResize);
      return;
    }

    gsap.set(titles[0], { opacity: 1, scale: 1 });
    gsap.set(titles[1], { opacity: 0, scale: 0.75 });
    gsap.set(titles[2], { opacity: 0, scale: 0.75 });

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 5}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        scrub: 0.5,
      },
    });

    masterTimeline
      .to(
        titles[0],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power3.out",
        },
        1
      )

      .to(
        titles[1],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        1.25
      );

    masterTimeline
      .to(
        titles[1],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        2.5
      )

      .to(
        titles[2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        2.75
      );

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      pinTrigger.kill();
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
	    <img src={heroImage} alt="Med Aly Dridi" />
	  </div>

          <div className="hero-header">
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
              Med Aly
            </AnimatedCopy>
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.8}>
              Dridi
            </AnimatedCopy>
          </div>
        </section>

        <section ref={stickyTitlesRef} className="sticky-titles">
          <div className="sticky-titles-nav">
            <p className="primary sm">About Me</p>
            <p className="primary sm">Let’s Connect</p>
          </div>
          <div className="sticky-titles-footer">
            <p className="primary sm">Creativity Meets Technology</p>
            <p className="primary sm">Open to Collaborations</p>
          </div>
           <h2 ref={(el) => (titlesRef.current[0] = el)} className="font-mono text-white text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gray-900 px-3 py-1 tracking-widest">
     $      got $bash?
</h2> 
        <h2 ref={(el) => (titlesRef.current[1] = el)}
      className="font-mono text-green-300 text-base sm:text-m md:text-m lg:text-l bg-gray-900 px-4 py-3 rounded-md border-l-4 border-green-400"
      >
      $  terminal lover?
          </h2>
      <h2 ref={(el) => (titlesRef.current[2] = el)} className="font-mono text-red-300 text-base sm:text-l md:text-l bg-black px-5 py-3 rounded border border-red-800 tracking-wider lowercase">
  $     curl https://www.medaly.engineer
</h2>  


      </section>
        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
          <AnimatedCopy tag="h1" animateOnScroll="true">
            Impact
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to="/work"
                key={work.id}
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <Reviews />

        <section className="hobbies">
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
            CEO
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Digital Creator
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              IT Engineer
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Mechatronics Engineer
            </AnimatedCopy>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
