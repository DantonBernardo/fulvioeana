import LogoPreta from '../assets/images/footer/logoPreta.png';
import { socials } from '../constants/ana';

// Icons
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-20 2xl:px-60 grid gap-5 lg:flex lg:justify-center">

      
      {/* Logo */}
      <div 
        className="
          w-full 
          md:flex 
          md:justify-center
          lg:justify-start lg:w-1/4
        ">
        <img 
          src={LogoPreta}
          alt='Logo Fulvio e Ana Maria'
          className='w-full md:w-3/4 object-contain'
        />
      </div>

      <div>
        <div 
          className="
            grid grid-cols-10 gap-2 
            justify-between 
            lg:grid-cols-3
            lg:justify-end
          "
        >
          
          <div className="col-span-5 w-full lg:col-span-1 max-w-[250px]">
            <h1
              className='
                font-title 
                text-[2rem]
              '
            >
              Endereço
            </h1>
            <p
              className='
                font-p
                text-md
              '
            >
              📌 Guarapuava, Paraná, Brg. Rocha, 2132, Centro
            </p>
          </div>

          <div className="col-span-5 lg:col-span-1">
            <h1
              className='
                font-title 
                text-[2rem]
              '
            >
              Contato
            </h1>
              <div className='grid gap-2.5'>
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#25D366]
                    underline
                  '
                  href='https://wa.me/554299426434'
                  target='_blank'
                >
                  <FaWhatsapp
                    size={24} 
                    className='mr-1.5'  
                  />
                  Whatsapp
                </a>
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#1877F2]
                    underline
                  '
                  href='https://www.facebook.com/fulvioeanacabeleireiros'
                  target='_blank'
                >
                  <FaFacebook
                    size={24} 
                    className='mr-1.5'  
                  />
                  Facebook
                </a>
                <a
                  className='
                    font-semibold 
                    flex 
                    items-center 
                    text-[#E1306C]
                    underline
                  '
                  href='https://www.instagram.com/salaoanamaria_/'
                  target='_blank'
                >
                  <FaInstagram
                    size={24} 
                    className='mr-1.5'  
                  />
                  Instagram
                </a>
              </div>
          </div>

          <div className="col-span-10 lg:col-span-1">
            <h1
              className='
                font-title 
                text-[2rem]
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
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
