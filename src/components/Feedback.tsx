import { feedbacks } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "./feedbackSlider.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Feedback({ index = 0 }){
  const textColor = index === 0 ? 'white' : 'black';
  const cardBgColor = index === 0 ? '#202020' : '#f8f8ff'

  useGSAP(async() => {
    await document.fonts.ready;

    const fbTitleSplit = new SplitText('#feedbacks h1', {
      type: "words"
    })

    const scrollTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger: '#feedbacks',
        start: 'top 75%'
      }
    })

    scrollTimeLine
      .from(fbTitleSplit.words, {
        opacity: 0,
        yPercent: 25,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.02
      })
  })

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    cssEase: "ease-in-out",
    responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "50px",
      }
    },
  ]

  };


  return(
    <section
      id="feedbacks"
      style={{color: textColor}}
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
        <Slider {...settings}>
          {feedbacks.map((f) => (
            <div
              className="
                px-3
              "
            >
              <div
                className="
                  absolute
                  bottom-0 pb-3 pl-4
                  flex gap-1
                "
              >
                <FaStar 
                  className="
                    text-[.4rem]
                    md:text-[.6rem]
                    xl:text-[1rem]
                  "
                  color="#FFD700"
                />                
                <FaStar 
                  className="
                    text-[.4rem]
                    md:text-[.6rem]
                    xl:text-[1rem]
                  "
                  color="#FFD700"
                />                
                <FaStar 
                  className="
                    text-[.4rem]
                    md:text-[.6rem]
                    xl:text-[1rem]
                  "
                  color="#FFD700"
                />                
                <FaStar 
                  className="
                    text-[.4rem]
                    md:text-[.6rem]
                    xl:text-[1rem]
                  "
                  color="#FFD700"
                />                
                <FaStar 
                  className="
                    text-[.4rem]
                    md:text-[.6rem]
                    xl:text-[1rem]
                  "
                  color="#FFD700"
                />                
              </div>

              <div
                style={{ backgroundColor: cardBgColor}}
                className="
                  border rounded-md
                  p-4
                  h-55
                  flex
                  flex-col
                  md:h-50
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
                >{f.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};