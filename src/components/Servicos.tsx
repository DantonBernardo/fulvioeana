import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
// Comum
import barba from '../assets/images/servicos/barba.png';
import maquiagem from '../assets/images/servicos/maquiagem.png';

// Fulvio
import corte from '../assets/images/servicos/corte.png';
import kids from '../assets/images/servicos/kids.png';
import sobrancelhaH from '../assets/images/servicos/sobrancelhaH.png';

// Ana
import cabelo from '../assets/images/servicos/cabelo.png';
import manicure from '../assets/images/servicos/manicure.png';
import sobrancelhaM from '../assets/images/servicos/sobrancelhaM.png';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Servicos({ index = 0}) {
  const textColor = index === 0 ? 'white' : 'black';
  const fontText = index === 0 ? 'font-title' : 'salao-title';
  const subtitleFont = index === 0 ? 'salao-title' : 'barbearia-title';
  const images = index === 0 ? [
    barba,
    corte,
    kids,
    sobrancelhaH,
    maquiagem,
  ] : [
    maquiagem,
    cabelo,
    manicure,
    sobrancelhaM,
    barba,
  ];

  const cardName = index === 0 ? [
    'Barba',
    'Corte',
    'Kids',
    'Sobrancelha',
    'Estética Feminina',
  ] : [
    'Maquiagem',
    'Cabelo',
    'Manicure',
    'Sobrancelha',
    'Estética Masculina',
  ];

  const navigate = useNavigate();

  useGSAP(() => {
    const titleSplit = SplitText.create('#servicos h1', {
    type: 'words'
    })

    const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#servicos',
      start: 'top center'
    }
    })
    
    scrollTimeline
    .from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })
    .from('.test > div', {
      opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
    }, '-=0.5')
  })

  return (
    <section 
      id="servicos" 
      className="
        h-auto 
        px-8
        2xl:px-60
      "
      style={{ color: textColor }}
      >
      <h1 
        className="
          text-center text-[2.5rem] px-8
          md:text-[5rem]
          xl:text-[6rem]
          font-title
        "
      >
        Nossos serviços
      </h1>
      
      <div 
        className='
          flex flex-col gap-5
          lg:flex-row
          test
        '
      >
        <div 
          className='
            flex flex-col gap-5
            lg:w-[50%]
          '
        >
          {/* Card 1 */}
          <div  
            style={{ backgroundImage: `url(${images[0]})` }}
            className="
              relative
              w-full h-[20vh]
              2xl:h-[50vh]
              rounded-2xl
              bg-center bg-cover bg-no-repeat
              overflow-hidden
              text-center content-center
            "
          >
            <div 
              className="
                absolute inset-0 
                bg-black/50 
                hover:bg-black/10
                transition-all duration-400
                2xl:bg-black/35
              "
            ></div>

            <h2
              className={`
                ${fontText}
                font-semibold
                relative z-10
                text-white text-2xl
                xl:text-4xl
              `}
            >
              {cardName[0]}
            </h2>
          </div>

          {/* Cards 2 e 3 */}
          <div className="flex flex-row gap-5">

            <div style={{ backgroundImage: `url(${images[1]})` }} className="
              relative
              w-full h-[10vh]
              md:h-[20vh]
              2xl:h-[30vh]
              rounded-2xl
              bg-center bg-cover bg-no-repeat
              overflow-hidden
              text-center content-center
            ">
              <div className="
                absolute inset-0 bg-black/50 2xl:bg-black/35
                hover:bg-black/10 transition-all duration-400
              "></div>

              <h2 
                className={`
                  ${fontText}
                  relative z-10
                  text-white text-2xl
                  font-semibold
                `}
              >
                {cardName[1]}
              </h2>
            </div>

            <div style={{ backgroundImage: `url(${images[2]})` }} className="
              relative
              w-full h-[10vh]
              md:h-[20vh]
              2xl:h-[30vh]
              rounded-2xl
              bg-center bg-cover bg-no-repeat
              overflow-hidden
              text-center content-center
            ">
              <div className="
                absolute inset-0 bg-black/50 2xl:bg-black/35
                hover:bg-black/10 transition-all duration-400
              "></div>

              <h2 
                className={`
                  ${fontText}
                  relative z-10
                  text-white text-2xl
                  font-semibold
                `}
              >
                {cardName[2]}
              </h2>
            </div>

          </div>
        </div>

        <div className='
          flex flex-col gap-5
          lg:w-[50%]
        '>
          {/* Card 4 */}
          <div style={{ backgroundImage: `url(${images[3]})` }} className="
            relative
            w-full h-[20vh]
            2xl:h-[35vh]
            rounded-2xl
            bg-center bg-cover bg-no-repeat
            overflow-hidden
            text-center content-center
          ">
            <div className="
              absolute inset-0 bg-black/50 2xl:bg-black/35
              hover:bg-black/10 transition-all duration-400
            "></div>

            <h2 
              className={`
                ${fontText}
                relative z-10
                text-white text-2xl
                font-semibold
                xl:text-4xl
              `}
            >
              {cardName[3]}
            </h2>
          </div>

          {/* Card 5 */}
          <div
          style={{ backgroundImage: `url(${images[4]})` }}
          onClick={() => navigate(index === 0 ? '/ana' : '/fulvio')}
          className="
            relative
            w-full h-[20vh]
            2xl:h-[45vh]
            rounded-2xl
            bg-center bg-cover bg-no-repeat
            overflow-hidden
            text-center content-center
            cursor-pointer
          ">
            <div className="
              absolute inset-0 bg-black/50 2xl:bg-black/35
              hover:bg-black/10 transition-all duration-400
            "></div>

            <h2 
              className={`
                ${fontText}
                relative z-10
                text-white text-2xl
                font-semibold
                xl:text-4xl
              `}
            >
              {cardName[4]}
            </h2>
            <h3 
              className={`
                ${subtitleFont}
                relative z-10
                text-white text-sm
                font-semibold
                xl:text-2xl
                uppercase
              `}
            >
              {
                index === 0 ? 'Ana Maria' : 'Fulvio Barbershop'
              }
            </h3>
            <p className='
              bottom-0 absolute justify-center flex 
              w-full 
              mb-3 
              text-white text-semibold text-[1rem]
              uppercase
            '>
                Clique para saber mais
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};