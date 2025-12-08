import { MdMenu } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
import MobileNav from './MobileNav';
import { useState } from "react";
import { logo } from "../../constants";

export default function HeaderMobile({ index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() : void {
    setIsOpen(true);
  }

  function closeNav(): void {
    setIsOpen(false);
  }

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const headerTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'header',
        start: '25% top',
      }
    });

    headerTween.fromTo('header', 
      { backgroundColor: 'transparent', backdropFilter: 'blur(0px)' },
      { backgroundColor: '#00000050', backdropFilter: 'blur(10px)', duration: .5, ease: 'power1.out' }
    )
  });

  return(
    <>
      <header 
        className="
          flex
          justify-between
          p-6
          items-center
          fixed
          w-full
          h-[10vh]
          top-0 
          left-0
          z-20
        "
      >
        <img 
          src={logo[index]}
          className="
            w-[11%]
            sm:w-15
            h-auto
          "
          alt="Logo"
        />
        <button
          className="cursor-pointer border-none"
          onClick={() => openNav()}
          aria-label="Abrir menu de navegação"
        >
          <MdMenu
            className="
              text-white text-[25px]
              sm:text-[30px]
              2xl:text-[60px]
            "
          />
        </button>

      </header>
    
      {isOpen && <MobileNav isOpen={isOpen} onClose={closeNav} />}

    </>
  )
}