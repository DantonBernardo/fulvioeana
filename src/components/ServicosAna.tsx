import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
import maquiagem from '../assets/images/servicos/ana/maquiagem.png';
import cabelo from '../assets/images/servicos/ana/cabelo.png';
import manicure from '../assets/images/servicos/ana/manicure.png';
import sobrancelha from '../assets/images/servicos/ana/sobrancelha.png';
import barba from '../assets/images/servicos/ana/barba.png';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Servicos() {
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
    <section id="servicos" className="h-auto px-8 mt-5 mb-15 2xl:px-60">
      <h1 className="
        text-center text-neutral-900 text-[2.5rem] px-8 py-4
        md:text-[5rem]
        xl:text-[6rem]
        font-title
      ">
        Nossos serviços
      </h1>
      
      <div className='
        flex flex-col gap-5
        lg:flex-row
        test
      '>
        <div className='
          flex flex-col gap-5
          lg:w-[50%]
        '>
          {/* Card 1 */}
          <div style={{ backgroundImage: `url(${maquiagem})` }} className="
            relative
            w-full h-[20vh]
            2xl:h-[50vh]
            rounded-2xl
            bg-center bg-cover bg-no-repeat
            overflow-hidden
            text-center content-center
          ">
            <div className="
              absolute inset-0 bg-black/50 2xl:bg-black/35
              hover:bg-black/10 transition-all duration-400
            "></div>

            <h2 className="
              salao-title font-semibold
              relative z-10
              text-white text-2xl
              xl:text-4xl
            ">
              Maquiagem
            </h2>
          </div>

          {/* Cards 2 e 3 */}
          <div className="flex flex-row gap-5">

            <div style={{ backgroundImage: `url(${cabelo})` }} className="
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

              <h2 className="
                salao-title
                relative z-10
                text-white text-2xl
                font-semibold
              ">
                Cabelo
              </h2>
            </div>

            <div style={{ backgroundImage: `url(${manicure})` }} className="
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

              <h2 className="
                salao-title
                relative z-10
                text-white text-2xl
                font-semibold
              ">
                Manicure
              </h2>
            </div>

          </div>
        </div>

        <div className='
          flex flex-col gap-5
          lg:w-[50%]
        '>
          {/* Card 4 */}
          <div style={{ backgroundImage: `url(${sobrancelha})` }} className="
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

            <h2 className="
              salao-title
              relative z-10
              text-white text-2xl
              font-semibold
              xl:text-4xl
            ">
              Sobrancelha
            </h2>
          </div>

          {/* Card 5 */}
          <div
          style={{ backgroundImage: `url(${barba})` }}
          onClick={() => navigate('/fulvio')}
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

            <h2 className="
              salao-title
              relative z-10
              text-white text-2xl
              font-semibold
              xl:text-4xl
            ">
              Estética Masculina
            </h2>
            <h4 className="
              relative z-10
              text-white text-sm
              font-semibold barbearia-title
              xl:text-4xl
              uppercase
            ">
              Fulvio Barbershop
            </h4>
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