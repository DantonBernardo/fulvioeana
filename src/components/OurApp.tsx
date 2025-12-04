import AppImg from '../assets/images/app/0.png';
import PlayStore from '../assets/images/app/googleplay.png';
import AppleStore from '../assets/images/app/appstore.png';

export default function OurApp() {
  return (
    <section className='
      px-8 mt-5 mb-15 
      xl:px-60
    '>
      <h1 className='
        text-[2.5rem] text-white text-center
        md:text-[5rem] md:text-left
        xl:text-[6rem]
        font-title
      '>
        Conheça nosso app!
      </h1>
      
      {/* App Image */}
      <div className='my-4'>
        <img 
          src={AppImg}
          alt='Imagem do Aplicativo Fulvio e Ana Maria'
        />
      </div>

      {/* Text How Works */}
      <div className='text-center'>
        <h2 className='
          text-white
          font-thin font-p
        '>
          Escolha o <span className='font-bold'>serviço</span>,
        </h2>
        <h2 className='
          text-white
          font-thin font-p
        '>
          selecione o <span className='font-bold'>profissional</span> e
        </h2>
        <h2 className='
          text-white
          font-thin font-p
        '>
          marque o horário <span className='font-bold'>perfeito</span>.
        </h2>
      </div>

      {/* Text 2 */}
      <div className='text-center my-5'>
        <h2 className='
          text-white
          font-thin font-p
        '>
          Tudo direto pelo <span className='font-bold'>seu</span> celular
        </h2>
      </div>

      {/* Download Buttons */}
      <div>
        <h2 className='
          text-white text-center
          font-normal font-p
          mb-2
        '>Disponível em</h2>
        {/* Buttons */}
        <div className='flex justify-between'>
          <a
            className='w-[48%] cursor-pointer'
            href='https://apps.apple.com/br/app/fúlvio-ana-cabeleireiro/id1498126937'
            target='_blank'
          >
            <img
              src={PlayStore}
              alt='Botão para abrir Google Play'
            />
          </a>
          <a
            className='w-[48%] cursor-pointer'
            href='https://play.google.com/store/apps/details?id=com.ionicfulvioanacabeleireiro.fulvioanacabeleireiro'
            target='_blank'
          >
            <img 
              src={AppleStore}
              alt='Botão para abrir Apple Store'
            />
          </a>
        </div>
      </div>
    </section>
  );
};