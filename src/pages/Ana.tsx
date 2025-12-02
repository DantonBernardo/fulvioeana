import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Ana(){
  return (
    <div className="bg-[#F2F5F7]">
      <Helmet>
        <title>Salão Ana Maria — Beleza e Bem-Estar</title>
        <meta
          name="description"
          content="Salão de beleza feminino com cabeleireira, manicure, massagista e tratamentos completos em Guarapuava - PR."
        />
        <meta property="og:title" content="Salão Ana Maria — Beleza e Bem-Estar" />
        <meta property="og:description" content="Cabeleireira, manicure, massagista e cuidados femininos em Guarapuava - PR." />
      </Helmet>

      <Header index={1} />
      <Hero index={1} />
      <div className="h-dvh"></div>
    </div>
  );
};
