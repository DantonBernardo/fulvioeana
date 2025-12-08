import AppImgPreta from "../assets/images/app/0.png";
import AppImgBranca from "../assets/images/app/1.png";
import PlayStore from "../assets/images/app/googleplay.png";
import AppleStore from "../assets/images/app/appstore.png";

export default function OurApp({ index = 0 }) {
  const appImg = index === 0 ? AppImgPreta : AppImgBranca;
  const textColor = index === 0 ? 'white' : 'black'

  return (
    <section
      id="app"
      style={{ color: textColor }}
      className="
        px-6 pt-5 mb-10
        2xl:px-40
      "
    >
      <h1 
        className="
          text-center text-[1.8rem]
          mb-2
          font-title
          sm:text-[3rem]
          md:text-[3.5rem] md:text-left
          lg:text-[4rem]
          xl:text-[4.2rem]
          font-title
        "
      >
        Conheça nosso app!
      </h1>

      <div 
        className="
          sm:flex
          "
        >

        {/* App Image */}
        <div 
          className="
            my-2 mx-[20%]
            sm:w-1/2 sm:mx-0 sm:items-start
          "
        >
          <img
            src={appImg}
            alt="Imagem do Aplicativo Fulvio e Ana Maria"
            className="
              sm:h-full
            "
          />
        </div>

        {/* Right */}
        <div 
          className="
            sm:w-1/2
            sm:flex sm:flex-col sm:justify-center
            md:text-[3vw]
            xl:text-[2vw]
          "
        >

          {/* Text How Works */}
          <div 
            className="
              text-center
              sm:w-full sm:justify-center
            "
          >
            <h2 
              className="
                font-thin font-p
              "
            >
              Escolha o <span className="font-bold">serviço</span>,
            </h2>
            <h2 
              className="
                font-thin font-p
              "
            >
              selecione o <span className="font-bold">profissional</span> e
            </h2>
            <h2 
              className="
                font-thin font-p
              "
            >
              marque o horário <span className="font-bold">perfeito</span>.
            </h2>
          </div>

          {/* Text 2 */}
          <div 
            className="
              text-center
              my-5
            "
          >
            <h2 
              className="
                font-thin font-p
              "
            >
              Tudo direto pelo <span className="font-bold">seu</span> celular
            </h2>
          </div>

          {/* Download Buttons */}
          <div>
            <h2 
              className="
                font-title 
                text-center text-2xl
                md:text-[3.5vw]
                lg:my-10
                xl:text-[2.5vw]
              "
            >
              Baixe agora!
            </h2>
            <h3 
              className="
                text-center
                font-normal font-p
                mb-4 md:mb-6
                md:text-[3vw]
                xl:text-[2vw]
              "
            >
              Disponível em
            </h3>

            {/* Buttons Container */}
            <div 
              className="
                flex flex-col
                sm:flex-row
                justify-center
                items-center
                gap-2
                md:gap-4
                px-4
              "
            >
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.ionicfulvioanacabeleireiro.fulvioanacabeleireiro"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  max-w-[180px]
                  sm:max-w-[200px]
                  xl:max-w-[250px]
                  transition-transform
                  duration-300
                  hover:scale-105
                  active:scale-95
                "
              >
                <img
                  src={PlayStore}
                  alt="Botão para baixar na Google Play"
                  className="
                    w-full
                    h-auto
                    drop-shadow-lg
                    hover:drop-shadow-xl
                    transition-all
                  "
                />
              </a>

              {/* Apple Store Button */}
              <a
                href="https://apps.apple.com/br/app/fúlvio-ana-cabeleireiro/id1498126937"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  max-w-[180px]
                  sm:max-w-[200px]
                  xl:max-w-[250px]
                  transition-transform
                  duration-300
                  hover:scale-105
                  active:scale-95
                "
              >
                <img
                  src={AppleStore}
                  alt="Botão para baixar na Apple Store"
                  className="
                    w-full
                    h-auto
                    drop-shadow-lg
                    hover:drop-shadow-xl
                    transition-all
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};