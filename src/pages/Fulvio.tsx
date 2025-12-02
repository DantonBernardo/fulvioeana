import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Fulvio(){
  return (
    <div className="bg-[#1a1a1a]">
      <Helmet>
        <title>Barbearia Fulvio — Cortes, Barba e Estilo</title>
        <meta
          name="description"
          content="Barbearia especializada em cortes masculinos, barba e cuidados pessoais em Guarapuava - PR. Profissionalismo e estilo para você."
        />
        <meta property="og:title" content="Barbearia Fulvio — Cortes e Barba" />
        <meta property="og:description" content="Cortes masculinos, barba e cuidados pessoais em Guarapuava - PR." />
      </Helmet>

      <Header index={0} />
      <Hero index={0} />
      <div className="h-dvh"></div>
    </div>
  );
};
