import { logo, navLinks } from "../../constants";
import { Link } from "react-scroll";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';

export default function HeaderDesktop({ index = 0 }) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const headerTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'header',
        start: '80% top',
      }
    });

    headerTween.fromTo('header', 
      { backgroundColor: 'transparent', backdropFilter: 'blur(0px)' },
      { backgroundColor: '#00000050', backdropFilter: 'blur(10px)', duration: .5, ease: 'power1.out' }
    )
  });

  return (
    <header className="flex justify-between px-25 py-2 items-center fixed w-full h-[15vh] top-0 left-0 z-20">
      
      <img
        src={logo[index]}
        className="w-25 h-auto logo"
        alt="Logo"
      />

      <ul className="navLinks flex justify-center items-center h-full">
        {navLinks.map((link) => (
          <li key={link.href} className="p-4">
            <Link
              to={link.href}
              smooth={true}
              duration={600}
              className="text-white text-2xl font-light pb-1 hover-link nav-link cursor-pointer"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

    </header>
  );
}
