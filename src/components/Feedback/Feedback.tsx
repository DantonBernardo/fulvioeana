import { feedbacks } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "./feedbackSlider.css";
import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface FeedbackProps {
  index?: number;
}

export default function Feedback({ index = 0 }: FeedbackProps) {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const sliderRef = useRef<any>(null);
  const textColor = index === 0 ? 'white' : 'black';
  const cardBgColor = index === 0 ? '#202020' : '#f8f8ff';

  useEffect(() => {
    // Atualiza width no mount
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(async () => {
    await document.fonts.ready;

    const fbTitleSplit = new SplitText('#feedbacks h1', {
      type: "words"
    });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#feedbacks',
        start: 'top 75%'
      }
    });

    scrollTimeLine
      .from(fbTitleSplit.words, {
        opacity: 0,
        yPercent: 25,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.02
      });
  }, []);

  // Determina configurações baseado no windowWidth
  const getSliderSettings = () => {
    let slidesToShow = 3;
    let centerPadding = "100px";
    let showDots = true;

    if (windowWidth <= 500) {
      slidesToShow = 1;
      centerPadding = "60px";
      showDots = false;
    } else if (windowWidth <= 1024) {
      slidesToShow = 1;
      centerPadding = "100px";
    } else if (windowWidth <= 1100) {
      slidesToShow = 3;
      centerPadding = "5%";
    }

    return {
      dots: showDots,
      infinite: true,
      slidesToShow,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 600,
      cssEase: "ease-in-out",
      initialSlide: 0,
    };
  };

  const settings = getSliderSettings();

  return (
    <section
      id="feedbacks"
      style={{ color: textColor }}
      className="
        px-6 py-25
        2xl:px-40
      "
    >
      <h1
        className="
          text-center text-[1.5rem]
          mb-5
          font-title
          sm:text-[3rem]
          md:text-[3.5rem]
          lg:text-[4rem]
          xl:text-[4.2rem]
        "
      >
        O que nosso clientes dizem?
      </h1>
      <div
        className="
          px-6
          sm:px-10
          md:px-15
          lg:px-25
          carousel-mask
        "
      >
        <Slider ref={sliderRef} {...settings} key={windowWidth}>
          {feedbacks.map((f, idx) => (
            <div
              key={idx}
              className="px-3"
            >
              <div className="relative">
                <div
                  className="
                    absolute
                    bottom-0 pb-3 pl-4
                    flex gap-1
                    z-10
                  "
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="
                        text-[.4rem]
                        md:text-[.6rem]
                        xl:text-[1rem]
                      "
                      color="#FFD700"
                    />
                  ))}
                </div>

                <div
                  style={{ backgroundColor: cardBgColor }}
                  className="
                    border rounded-md
                    p-4
                    h-55
                    flex
                    flex-col
                    md:h-50
                    relative
                  "
                >
                  <div
                    className="
                      flex items-center mb-3
                    "
                  >
                    <img
                      src="/assets/images/profileIcon.svg"
                      alt="Ícone"
                      className="
                        w-6
                        mr-1
                        sm:mr-3
                      "
                    />
                    <h2
                      className="
                        font-bold
                        text-[.5rem]
                        sm:text-[.6rem]
                        md:text-[.8rem]
                      "
                    >
                      {f.name}
                    </h2>
                  </div>
                  <p
                    className="
                      text-[.55rem]
                      sm:text-[.9rem]
                      lg:text-[.7rem]
                      xl:text-[.75rem]
                    "
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}