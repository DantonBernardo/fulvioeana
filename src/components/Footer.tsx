import LogoPreta from '../assets/images/footer/logoPreta.webp';
import LogoBranca from '../assets/images/footer/LogoBranca.webp';

// Icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer({ index = 0 }) {
  const bgColor = index === 0 ? '#1a1a1a' : '#F2F5F7';
  const textColor = index === 0 ? 'white' : 'black';
  const logo = index === 0 ? LogoBranca : LogoPreta;
  const links = index === 0 ? [
    'https://wa.me/554288073102',
    'https://www.facebook.com/fulvioeanacabeleireiros',
    'https://www.instagram.com/fulviobarbershop/',
  ] : [
    'https://wa.me/554299426434',
    'https://www.facebook.com/fulvioeanacabeleireiros',
    'https://www.instagram.com/salaoanamaria_/',
  ];

  return (
    <footer
      style={{ backgroundColor: bgColor, color: textColor }}
      className="
        w-full
        px-6 py-10
        grid gap-3
        lg:flex lg:justify-center
        2xl:px-40
      "
    >

      <div
        className='
          order-1
          lg:order-2
          lg:w-3/4
        '
      >
        <div 
          className="
            grid grid-cols-10 gap-5
            justify-between 
            lg:grid-cols-3
            lg:justify-end
          "
        >
          
          <div className="
            col-span-5
            w-full
            lg:col-span-1
            max-w-[75%]
            "
          >
            <h1
              className='
                font-title 
                text-[1.4rem]
                sm:text-[1.8rem]
                md:text-[2.2rem]
                lg:text-[2rem]
              '
            >
              Endereço
            </h1>
            <p
              className='
                font-p
                text-[.7rem]
                sm:text-[1rem]
                md:text-[1.2rem]
                lg:text-[1.2rem]
              '
            >
              📌 Guarapuava, Paraná, Brg. Rocha, 2132, Centro
            </p>
          </div>

          <div className="col-span-5 lg:col-span-1">
            <h1
              className='
                font-title 
                text-[1.4rem]
                sm:text-[1.8rem]
                md:text-[2.2rem]
                lg:text-[2rem]
              '
            >
              Contato
            </h1>
              <div 
                className='
                  grid gap-2.5
                  sm:gap-3.5
                '
              >
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#25D366]
                    text-[.7rem]
                    underline
                    sm:text-[1rem]
                    md:text-[1.2rem]
                    lg:text-[1.2rem]
                  '
                  href={ links[0] }
                  target='_blank'
                >
                  <FaWhatsapp
                    className='
                      mr-1.5
                      text-[1rem]
                      sm:text-[1.5rem]
                      md:text-[1.8rem]
                      lg:text-[1.6rem]
                    '  
                  />
                  Whatsapp &#128279;
                </a>
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#1877F2]
                    text-[.7rem]
                    underline
                    sm:text-[1rem]
                    md:text-[1.2rem]
                    lg:text-[1.2rem]
                  '
                  href={ links[1] }
                  target='_blank'
                >
                  <FaFacebook
                    className='
                      mr-1.5
                      text-[1rem]
                      sm:text-[1.5rem]
                      md:text-[1.8rem]
                      lg:text-[1.6rem]
                    '  
                  />
                  Facebook &#128279;
                </a>
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#E1306C]
                    text-[.7rem]
                    underline
                    sm:text-[1rem]
                    md:text-[1.2rem]
                    lg:text-[1.2rem]
                  '
                  href={ links[2] }
                  target='_blank'
                >
                  <FaInstagram
                    className='
                      mr-1.5
                      text-[1rem]
                      sm:text-[1.5rem]
                      md:text-[1.8rem]
                      lg:text-[1.6rem]
                    '  
                  />
                  Instagram &#128279;
                </a>
              </div>
          </div>

          <div className="col-span-10 lg:col-span-1">
            <h1
              className='
                font-title 
                text-[1.4rem]
                sm:text-[1.8rem]
                md:text-[2.2rem]
                lg:text-[2rem]
              '
            >
              Localização
            </h1>
            <div
              className='
                
              '
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4755116407528!2d-51.4658333!3d-25.3888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef363130c3e2d7%3A0x505dc1e196f45aa9!2sF%C3%BAlvio%20%26%20Ana%20Maria%20Cabeleireiros!5e0!3m2!1spt-BR!2sbr!4v1764895582964!5m2!1spt-BR!2sbr"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Fulvio Barbershop e Ana Maria Estética"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Logo */}
      <div 
        className="
          w-full
          flex
          justify-center
          order-2
          lg:order-1
          lg:justify-start lg:items-center
          lg:w-1/4
        ">
        <img 
          src={logo}
          alt='Logo Fulvio e Ana Maria'
          className='
            w-1/2
            object-contain
            lg:w-3/4
          '
        />
      </div>
    </footer>
  );
}
