import Header from "../components/Header";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Servicos from "../components/Servicos";
import OurApp from "../components/OurApp/OurAppFulvio";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Fulvio() {
  return (
    <div className="bg-[#1a1a1a]">
      <SEO
        title="Barbearia Fulvio — Cortes, Barba e Estilo"
        description="Barbearia especializada em cortes masculinos, barba e cuidados pessoais em Guarapuava - PR. Profissionalismo e estilo para você."
      />

      <Header index={0} />
      <Hero index={0} />
      <Servicos index={0}/>
      <OurApp />
      <About index={0} />
      <Footer index={0}/>
      
    </div>
  );
};
