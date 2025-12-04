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
      className="px-8 py-20 2xl:px-60"
    >
      <h1 className="
        font-title font-bold 
        text-[2.5rem] 
      ">
        Quem somos?
      </h1>

      <div className="
        w-full flex flex-col sm:gap-5 md:gap-3
        sm:flex-row
      ">
        {/* Text */}
        <div className="
          w-full
          sm:w-6/10 sm:items-center sm:flex
        ">
          <p 
            dangerouslySetInnerHTML={{ __html: aboutText }} 
            className="
              font-p font-thin 
              text-[2vw]
              sm:text-[1.8vw]
              2xl:text-[1.2vw]
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
            rounded-2xl shadow-2xl
            sm:mt-0
            sm:h-[35vh] sm:w-4/10
            lg:h-[60vh]
            2xl:h-[50vh]
        "></div>

      </div>
    </section>
  );
};