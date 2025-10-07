import projects from "../../data/projects";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Work.css";

import { gsap } from "gsap";

import Transition from "../../components/Transition/Transition";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const carouselDescriptionRef = useRef(null);
  const carouselTitleRef = useRef(null);
  const workSliderImgRef = useRef(null);
  const descriptionTextRef = useRef(null);
  const titleTextRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const linkRef =useRef(null);

  const animateCarouselInfo = (newProject) => {
    const tl = gsap.timeline();

    tl.to([descriptionTextRef.current, titleTextRef.current], {
      yPercent: -100,
      duration: 0.75,
      stagger: 0.25,
      ease: "power4.in",
    });

    tl.to(
      imageRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (descriptionTextRef.current) descriptionTextRef.current.remove();
          if (titleTextRef.current && titleTextRef.current.parentNode) {
            titleTextRef.current.parentNode.remove();
          if (linkRef.current) linkRef.current.remove();
          }
          if (imageRef.current) imageRef.current.remove();

          const newDescriptionEl = document.createElement("p");
          newDescriptionEl.className = "primary sm";
          newDescriptionEl.textContent = newProject.description;

          const titleContainer = document.createElement("div");
          titleContainer.className = "project-title-container";
          titleContainer.style.cursor = "pointer";
          const newLink = document.createElement("a");
          newLink.textContent = activeProject.link
          const newTitleEl = document.createElement("h1");
          newTitleEl.textContent = newProject.title;
          console.log("1:", activeProject)
          titleContainer.onclick = () => navigate(newLink.textContent);

          titleContainer.appendChild(newTitleEl);

          const newImageEl = document.createElement("img");
          newImageEl.src = newProject.image;
          newImageEl.alt = newProject.title;

          gsap.set(newDescriptionEl, { yPercent: 100 });
          gsap.set(newTitleEl, { yPercent: 100 });
          gsap.set(newImageEl, { opacity: 0 });

          carouselDescriptionRef.current.appendChild(newDescriptionEl);
          carouselTitleRef.current.appendChild(titleContainer);
          workSliderImgRef.current.appendChild(newImageEl);
          workSliderImgRef.current.appendChild(newLink)

          descriptionTextRef.current = newDescriptionEl;
          titleTextRef.current = newTitleEl;
          imageRef.current = newImageEl;

          const inTl = gsap.timeline();

          inTl.to(newImageEl, {
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
          });

          inTl.to(
            [newDescriptionEl, newTitleEl],
            {
              yPercent: 0,
              duration: 0.75,
              stagger: 0.25,
              ease: "power4.out",
            },
            "-=0.5"
          );
          setActiveProject(newProject);
        },
      },
      "-=0.5"
    );
  };

  useEffect(() => {
    if (
      carouselDescriptionRef.current &&
      carouselTitleRef.current &&
      workSliderImgRef.current && activeProject.id==1   ) {
      descriptionTextRef.current =
        carouselDescriptionRef.current.querySelector("p");

      const initialTitleLink = carouselTitleRef.current.querySelector("a");
      if (initialTitleLink) {
        const initialTitle = initialTitleLink.querySelector("h1");

        const titleContainer = document.createElement("div");
        titleContainer.className = "project-title-container";
        titleContainer.style.cursor = "pointer";

        const newTitle = initialTitle.cloneNode(true);
        titleContainer.appendChild(newTitle);
        console.log("2:", activeProject)
        titleContainer.onclick = () => navigate(activeProject.link);

        initialTitleLink.parentNode.replaceChild(
          titleContainer,
          initialTitleLink
        );

        titleTextRef.current = newTitle;
      } else {
        titleTextRef.current = carouselTitleRef.current.querySelector("h1");
      }

      imageRef.current = workSliderImgRef.current.querySelector("img");
    }
  }, [navigate]);

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      animateCarouselInfo(project);
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img" ref={workSliderImgRef}>
        </div>



        <div className="carousel-info">
         
          <div className="carousel-description">
	  
            <p className="primary sm">Community Partner</p>
	  
          </div>

	  <div className="carousel-title">
	  
            <Link to="/oreilly">
	  
              <h1 className="oreilly">O&apos;Reilly®</h1>
	  
            </Link>

          </div>
          <div className="carousel-description">
	  
            <p className="primary sm">Community Founder</p>
	  
          </div>

	  <div className="carousel-title">
	  
            <Link to="/LocalHost">
	  
              <h1 className="localhost">Localhost community</h1>
	  
            </Link>

          </div>
	  <div className="carousel-description">
            <p className="primary sm">Speaker</p>
          </div>
	  <div className="carousel-title">
            <Link to="/Forkit-Community">
              <h1 className="forkit">Fork it! Community</h1>
            </Link>
          </div>
          <div className="carousel-description" >
            <p className="primary sm">Tech Educator</p>
          </div>
          <div className="carousel-title">
            <Link to="/Orbit-Event">
              <h1 className="orbit">Orbit 1.0</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Work);
