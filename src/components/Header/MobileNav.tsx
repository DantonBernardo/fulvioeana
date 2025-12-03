import { navLinks } from "../../constants";
import { MdClose } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { Link } from 'react-scroll';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

gsap.registerPlugin(SplitText);

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useGSAP(() => {
    if (!isOpen) return;

    gsap.from(".mobile-nav", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    const navSplit = new SplitText(".navLinks li a", { type: "lines"});

    gsap.from(navSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.1,
    });

    gsap.from(".contact-button" ,{
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    })

  }, { dependencies: [isOpen] },);

  return(
    <nav className="mobile-nav fixed z-50 w-full h-dvh bg-(--green)/96">
      <button
        onClick={onClose}
        className="absolute flex text-white justify-end w-full pl-8 pr-8 pt-2 pb-2 h-[10vh] items-center cursor-pointer"
        aria-label="Fechar menu de navegação"
      >
        <MdClose size={38}/>
      </button>
      
      <div className="contact-button absolute w-full flex flex-col justify-center items-center bottom-0">
        <a
          href="#"
          className="mb-20 inline-block border-2 border-white rounded-full text-white px-6 py-3 font-medium uppercase text-md"
        >
          Agende seu horário
        </a>
      </div>

      <ul className="navLinks flex flex-col justify-center items-center h-full">
        {navLinks.map((link) => (
          <li key={link.href} className="p-4">
            <Link
              onClick={onClose}
              to={link.href}
              smooth={true}
              duration={600}
              className="text-white text-4xl font-light cursor-pointer"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
};