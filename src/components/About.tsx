import { about as aboutFulvio } from "../constants/fulvio";
import { about as aboutAna } from "../constants/ana";
import fulvioPhoto from '../assets/images/about/fulvio.png';
import anaPhoto from '../assets/images/about/ana.png';

export default function About({index = 0}){
  const bgColor = index === 0 ? '#F2F5F7' : '#1a1a1a';
  const textColor = index === 0 ? 'black' : 'white';
  const aboutText = index === 0 ? aboutFulvio : aboutAna;
  const photo = index === 0 ? fulvioPhoto : anaPhoto;

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
        <div className="
          w-full
          sm:w-6/10
        ">
          <p 
            dangerouslySetInnerHTML={{ __html: aboutText }} 
            className="
              font-p font-thin 
              text-[3vw]
              sm:text-[.9rem]
              md:text-[1rem]
              lg:text-[1.5rem]
              xl:text-[1.7rem]
            "/>
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