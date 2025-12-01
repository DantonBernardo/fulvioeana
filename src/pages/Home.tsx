import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="h-dvh w-full xl:flex">
      {/* <div className="absolute top-1/2 left-0 w-full h-1 bg-white z-20 xl:hidden"></div>

      <div className="
        absolute top-0 bottom-0
        left-1/2 -translate-x-1/2
        w-1 bg-white
        hidden xl:block
        z-20
      "></div> */}

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
          text-white text-5xl
          md:text-7xl
        ">
          Barbearia
        </h1>

        <h2 className="
          relative z-10 
          text-white
        ">
          Para cavalheiros
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
          text-white text-5xl
          md:text-7xl
        ">
          Salão de beleza
        </h1>

        <h2 className="relative z-10 text-white">
          Estética feminina
        </h2>
      </div>
    </div>
  );
};