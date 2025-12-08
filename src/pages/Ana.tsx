import Header from "../components/Header";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Servicos from "../components/Servicos";
import OurApp from "../components/OurApp";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";

export default function Ana(){
  return (
    <div className="bg-[#F2F5F7]">
      <SEO 
        title="Salão Ana Maria - Estética Feminina" 
        description="Salão de beleza feminino com cabeleireira, manicure, massagista e tratamentos completos em Guarapuava - PR."
      />

      <Header index={1} />
      <Hero index={1} />
      <Servicos index={1}/>
      <OurApp index={1}/>
      <About index={1} />
      <FAQ index={1}/>
      <Footer index={1}/>
      
    </div>
  );
};
