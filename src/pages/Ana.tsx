import Header from "../components/Header";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import FAQ from "../components/Faq";
import Servicos from "../components/Servicos";
import OurApp from "../components/OurApp";
import About from "../components/About";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback/Feedback";

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
      <Feedback index={1}/>
      <OurApp index={1}/>
      <About index={1} />
      <FAQ index={1}/>
      <Footer index={1}/>
      
    </div>
  );
};
