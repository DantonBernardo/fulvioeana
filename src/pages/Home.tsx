import { useNavigate } from "react-router-dom";
import SEO from '../components/SEO';

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="h-dvh w-full xl:flex">
      <SEO 
        title="Fulvio e Ana Maria" 
        description="Barbearia e salão de beleza em Guarapuava: barbeiro, cabeleireiro, cabeleireira, manicure, massagista e cuidados para cabelo, barba e unhas."
      />

      {/* Fulvio */}
      <div onClick={() => navigate('/fulvio')} className="
        relative
        h-[50vh] w-full
        xl:h-dvh
        bg-[url('/assets/images/home/fulvio.png')] bg-bottom bg-cover bg-no-repeat
        cursor-pointer
        xl:bg-center
        text-center content-center
        group
      ">
        <div className="
          absolute inset-0 
          bg-black/60 
          transition-all duration-500 
          xl:group-hover:bg-black/20
        "></div>

        <h1 className="
          relative z-10
          mb-2
          text-white text-5xl barbearia-title
          md:text-7xl
        ">
          Barbearia
        </h1>

        <h2 className="
          relative z-10 
          text-white text-[1.2rem]
          font-p
        ">
          Para Cavalheiros
        </h2>
      </div>

      {/* Ana */}
      <div onClick={() => navigate('/ana')} className="
        relative
        h-[50vh] w-full
        xl:h-dvh
        bg-[url('/assets/images/home/ana.png')] bg-bottom bg-cover bg-no-repeat
        cursor-pointer
        xl:bg-center
        text-center content-center
        group
      ">
        <div className="
          absolute inset-0 
          bg-black/60 
          transition-all duration-500 
          xl:group-hover:bg-black/20
        "></div>

        <h1 className="
          relative z-10 
          mb-2
          text-white text-5xl
          md:text-7xl salao-title
        ">
          Salão de Beleza
        </h1>

        <h2 className="
          relative z-10 
          text-white text-[1.2rem]
          font-p
        ">
          Estética Feminina
        </h2>
      </div>
    </div>
  );
};