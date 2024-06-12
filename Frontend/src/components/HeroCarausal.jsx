import { useEffect, useRef, useState } from "react";
import "../styles/carausal.css";
import carausal1 from "../images/carausal1.webp";
import carausal2 from "../images/carausal2.jpeg";
import carausal3 from "../images/carausal3.webp";
import carausal4 from "../images/carausal4.webp";
import carausal5 from "../images/carausal5.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const HeroCarausal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroCarausal = useRef(null);
  const totalSlides = 5; 

  useEffect(() => {
    if (heroCarausal.current) {
      const slideWidth = heroCarausal.current.clientWidth / totalSlides;
      heroCarausal.current.style.transition = 'transform 0.5s ease-in-out';
      heroCarausal.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide, totalSlides]);

  const landingPageCarausalPrevBtn = () => {
    currentSlide > 0 &&
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const landingPageCarausalNextBtn = () => {
    currentSlide < totalSlides - 1 &&
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div id="landing_page_hero_carausal">
        <div className="landing_page_hero_carausal_slides" ref={heroCarausal}>
          <div className="landing_page_hero_carausal_slide">
            <img
              className="landing_page_hero_carausal_img"
              src={carausal1}
              alt="Slide 1"
            />
          </div>
          <div className="landing_page_hero_carausal_slide">
            <img
              className="landing_page_hero_carausal_img"
              src={carausal2}
              alt="Slide 2"
            />
          </div>
          <div className="landing_page_hero_carausal_slide">
            <img
              className="landing_page_hero_carausal_img"
              src={carausal3}
              alt="Slide 3"
            />
          </div>
          <div className="landing_page_hero_carausal_slide">
            <img
              className="landing_page_hero_carausal_img"
              src={carausal4}
              alt="Slide 4"
            />
          </div>
          <div className="landing_page_hero_carausal_slide">
            <img
              className="landing_page_hero_carausal_img"
              src={carausal5}
              alt="Slide 5"
            />
          </div>
        </div>

        <button
          onClick={landingPageCarausalPrevBtn}
          className="landing_page_hero_carausal_prev_btn"
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
        <button
          onClick={landingPageCarausalNextBtn}
          className="landing_page_hero_carausal_next_btn"
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </>
  );
};
