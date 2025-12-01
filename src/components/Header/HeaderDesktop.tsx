import { logo, navLinks } from "../../constants";

export default function HeaderDesktop({ index = 0 }) {
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
            <a
              href={link.href}
              className="text-white text-2xl font-light pb-1 hover-link nav-link"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

    </header>
  );
}
