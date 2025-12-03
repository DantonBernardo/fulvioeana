import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../constants";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero({ index = 0 }) {
  const heroRef = useRef(null);

  const data = hero[index];

  useGSAP(async () => {
    // espera as fontes carregarem
    await document.fonts.ready;

    const heroSplit = new SplitText(".title", { type: "lines" });

    gsap.from(heroSplit.lines, {
      yPercent: 150,
      duration: 1.5,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.02,
    });

    gsap.fromTo(
      heroSplit.lines,
      { opacity: 1, yPercent: 0 },
      {
        opacity: 0,
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        }
      }
    );
  }, { scope: heroRef });


  return (
    <section
      id="hero"
      ref={heroRef}
      className="h-dvh w-full pt-[10vh] flex text-left items-center"
    >
      <div
        className="hero-background bg-cover bg-center"
        style={{ backgroundImage: `url(${data.bg})` }}
      />

      <div className="z-10 w-full title">
        <h1 className="
          text-white text-[3rem] leading-15 px-8 font-title
          md:text-[6rem] md:leading-25 md:px-25
          xl:text-[6rem]
          font-light
        ">
          <span className="font-bold uppercase">{data.title}</span>
        </h1>

        <h2 className="
          text-white text-2xl font-light leading-10 px-8
          md:text-4xl md:leading-12 md:px-25 md:my-4
          xl:text-5xl xl:leading-15
        ">
          {data.subtitle}
        </h2>

        <a href="#" className="px-8 md:px-25">
          <button className="
            cursor-pointer text-white uppercase text-[1.8rem]
            mt-8 px-8 py-4 font-bold rounded-full
            bg-(--green) hover:bg-(--darker-green)
            transition-all md:text-[2.4rem]
          ">
            Agendar agora
          </button>
        </a>
      </div>
    </section>
  );
}