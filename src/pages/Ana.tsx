import Header from "../components/Header";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Servicos from "../components/ServicosAna";
import Feedback from "../components/Feedback";

export default function Ana(){
  return (
    <div className="bg-[#F2F5F7]">
      <SEO 
        title="Salão Ana Maria - Estética Feminina" 
        description="Salão de beleza feminino com cabeleireira, manicure, massagista e tratamentos completos em Guarapuava - PR."
      />

      <Header index={1} />
      <Hero index={1} />
      <Servicos />
      <Feedback/>

      <div className="h-dvh bg-green-500"></div>
      
    </div>
  );
};
