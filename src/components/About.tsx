import { about } from "../constants"
import fulvioPhoto from '../assets/images/about/fulvio.png';
import anaPhoto from '../assets/images/about/ana.png';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function About({index = 0}){
  const bgColor = index === 0 ? '#F2F5F7' : '#1a1a1a';
  const textColor = index === 0 ? 'black' : 'white';
  const aboutText = about[index];
  const photo = index === 0 ? fulvioPhoto : anaPhoto;

  useGSAP(async() => {
    const aboutSplit = new SplitText('#about h1', { type: "words" })
    const aboutTextSplit = new SplitText('#about-paragraph', { type: "lines" })

    const scrollTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger: '#about',
        start: 'top 80%'
      }
    })

    scrollTimeLine
      .from(aboutSplit.words, {
        yPercent: 150,
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(aboutTextSplit.lines, {
        yPercent: 150,
        duration: 1.5,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.02,
      })
  })

  return(
    <section 
      id="about"
      style={{ backgroundColor: bgColor, color: textColor }}
      className="
        px-6 py-6
        md:py-10
        2xl:px-40
      "
    >
      <h1 className="
        font-title
        text-[1.8rem]
        mb-2
        font-title
        sm:text-[3rem] sm:mb-3
        md:text-[3.5rem]
        lg:text-[4rem]
        xl:text-[4.2rem]
        2xl:text-[5rem]
      ">
        Quem somos?
      </h1>

      <div className="
        w-full flex flex-col sm:gap-5 md:gap-10
        sm:flex-row
      ">
        {/* Text */}
        <div 
          className="
            w-full
            sm:w-6/10
          "
        >
          <p
            id="about-paragraph"
            className="
              font-p font-thin 
              text-[3vw]
              sm:text-[.9rem]
              md:text-[1rem]
              lg:text-[1.5rem]
            "
          >
            {aboutText.text}
          </p>
        </div>

        {/* Image */}
        <div 
          style={{ backgroundImage: `url(${photo})` }}
          className="
            w-full
            h-[35vh]
            bg-cover bg-center
            mt-5 
            rounded-2xl
            sm:mt-0
            sm:h-[35vh] sm:w-4/10
            lg:h-[60vh]
        "></div>

      </div>
    </section>
  );
};