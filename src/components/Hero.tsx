import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../constants";
import { Link } from "react-scroll";

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
      className="
        h-dvh w-full 
        pt-[10vh] 
        flex text-left 
        items-center
      "
    >
      <div
        className="hero-background bg-cover bg-center"
        style={{ backgroundImage: `url(${data.bg})` }}
      />

      <div className="z-10 w-full title">
        <h1 
          className="
            text-white text-[2rem]
            leading-10
            font-title
            px-6
            sm:text-
            md:text-[6rem]
            md:leading-25
            md:px-25
            lg:text-
            xl:text-[6rem]
            2xl:text-
            font-light
          "
        >
          <span className="font-bold uppercase">{data.title}</span>
        </h1>

        <h2 className="
          text-white text-sm
          font-light leading-6
          px-6
          md:text-4xl 
          md:leading-12 
          md:px-25 md:my-4
          xl:text-5xl xl:leading-15
        ">
          {data.subtitle}
        </h2>

        <Link 
          to='app'
          smooth={true}
          duration={600}
          href="app"
          className="
            px-6
            md:px-25
          "
        >
          <button className="
            hero-button
            cursor-pointer 
            text-white
            uppercase 
            text-[1rem]
            mt-8 px-5 py-2
            font-bold 
            rounded-full
            bg-(--green) 
            hover:bg-(--darker-green) transition-all
            sm:text-[1.5rem]
            md:text-[2.4rem] md:px-6 md:py-4
          ">
            Agendar agora
          </button>
        </Link>
      </div>
    </section>
  );
}