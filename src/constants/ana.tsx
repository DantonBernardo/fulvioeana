// Types
import type { Faq } from "../types/Faq";
import type { Service } from "../types/Service";
import type { Social } from "../types/Social";

// Images
import cabeloImg from '../assets/images/servicos/ana/cabelo.png';
import maquiagemImg from '../assets/images/servicos/ana/maquiagem.png';
import sobrancelhaImg from '../assets/images/servicos/ana/sobrancelha.png';
import masculinoImg from '../assets/images/servicos/ana/barba.png';

const heroTitle : string[] = [
  "Sua beleza merece destaque"
]

const heroSubTitle : string[] = [
  "Do cuidado ao estilo, o salão pensado em cada detalhe"
]

const services: Service[] = [
  {
    id: 1,
    title: 'Maquiagem',
    cover: maquiagemImg,
  },
  {
    id: 2,
    title: 'sobrancelha',
    cover: sobrancelhaImg,
  },
  {
    id: 3,
    title: 'cabelo',
    cover: cabeloImg,
  },
  {
    id: 4,
    title: 'Maquiagem',
    cover: maquiagemImg,
  },
  {
    id: 5,
    title: 'Estética Masculina',
    cover: masculinoImg,
  },
];

const about : string[] = [
  "Aqui na Ana Maria Cabelo & Estética, a beleza é tratada com <b>técnica</b>, <b>sensibilidade</b> e <b>excelência</b>. O espaço feminino evoluiu ao longo dos anos e hoje oferece um atendimento <b>moderno</b>, <b>acolhedor</b> e totalmente personalizado para cada cliente.<br/><br/>Trabalhamos com <b>cabelo</b>, <b>maquiagem</b>, <b>design de sobrancelhas</b>, <b>estética</b> e cuidados completos de beleza — sempre com atenção aos detalhes, produtos de alta performance e um padrão de qualidade que acompanha as tendências sem perder a essência profissional.<br/><br/>Aqui, a experiência é sobre <b>bem-estar</b>, <b>confiança</b> e se sentir ainda mais bonita, seja para o dia a dia ou para momentos realmente especiais."
];

const faq : Faq[] = [
  {
    id: 1,
    question: '',
    awnser: '',
  }
]

const socials : Social[] = [
  {
    id: 1,
    name: 'Whatsapp',
    href: '#'
  },
  {
    id: 2,
    name: 'Instagram',
    href: '#'
  },
  {
    id: 3,
    name: 'Facebook',
    href: '#'
  },
]

export {
  heroTitle,
  heroSubTitle,
  services,
  about,
  faq,
  socials
}