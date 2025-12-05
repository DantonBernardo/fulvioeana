import AppImg from "../../assets/images/app/0.png";
import PlayStore from "../../assets/images/app/googleplay.png";
import AppleStore from "../../assets/images/app/appstore.png";

export default function OurApp() {
  //TODO: gsap animation

  return (
    <section id="app" className="
      px-8
      xl:px-60
    ">
      <h1 className="
        text-[2.5rem] text-white text-center
        md:text-[5rem] md:text-left
        xl:text-[6rem]
        font-title
      ">
        Conheça nosso app!
      </h1>
      
      <div className="sm:flex">

        {/* App Image */}
        <div className="
          my-4
          sm:w-1/2 sm:pr-15 sm:items-start
        ">
          <img 
            src={AppImg}
            alt="Imagem do Aplicativo Fulvio e Ana Maria"
            className="sm:h-full"
          />
        </div>

        {/* Right */}
        <div className="
          sm:w-1/2
          sm:flex sm:flex-col sm:justify-center
          md:text-[3vw]
          xl:text-[2vw]
        ">

          {/* Text How Works */}
          <div className="
            text-center
            sm:w-full sm:justify-center
          ">
            <h2 className="
              text-white
              font-thin font-p
              
            ">
              Escolha o <span className="font-bold">serviço</span>,
            </h2>
            <h2 className="
              text-white
              font-thin font-p
            ">
              selecione o <span className="font-bold">profissional</span> e
            </h2>
            <h2 className="
              text-white
              font-thin font-p
            ">
              marque o horário <span className="font-bold">perfeito</span>.
            </h2>
          </div>

          {/* Text 2 */}
          <div className="text-center my-5">
            <h2 className="
              text-white
              font-thin font-p
            ">
              Tudo direto pelo <span className="font-bold">seu</span> celular
            </h2>
          </div>

          {/* Download Buttons */}
          <div>
            <h2 className="
              font-title 
              text-white text-center text-2xl
              md:text-[3.5vw]
              lg:my-10
              xl:text-[2.5vw]
            ">
              Baixe agora!
            </h2>
            <h3 className="
              text-white text-center
              font-normal font-p
              mb-2
              md:text-[3vw]
              xl:text-[2vw]
            ">Disponível em</h3>
            {/* Buttons */}
            <div className="
              flex gap-2 w-full
              lg:justify-center
            ">
              <a
                className="w-full cursor-pointer lg:w-1/4"
                href="https://play.google.com/store/apps/details?id=com.ionicfulvioanacabeleireiro.fulvioanacabeleireiro"
                target="_blank"
              >
                <img
                  src={PlayStore}
                  alt="Botão para abrir Google Play"
                />
              </a>
              <a
                className="w-full cursor-pointer lg:w-1/4"
                href="https://apps.apple.com/br/app/fúlvio-ana-cabeleireiro/id1498126937"
                target="_blank"
              >
                <img 
                  src={AppleStore}
                  alt="Botão para abrir Apple Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};