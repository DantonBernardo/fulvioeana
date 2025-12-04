// Types
import type { Service } from "../types/Service";
import type { Social } from "../types/Social";
import type { Faq } from "../types/Faq";

// Images
import barbaImg from '../assets/images/servicos/fulvio/barba.png';
import sobrancelhaImg from '../assets/images/servicos/fulvio/sobrancelha.png';
import corteImg from '../assets/images/servicos/fulvio/corte.png';
import kidsImg from '../assets/images/servicos/fulvio/kids.png';
import maquiagemImg from '../assets/images/servicos/fulvio/maquiagem.png';

const heroTitle : string[] = [
  "Seu estilo merece respeito"
]

const heroSubTitle : string[] = [
  "Da barba ao corte,<br/>a barbearia feita para <span>você</span>"
]

const services : Service[] = [
  {
    id: 1,
    title: 'Barba',
    cover: barbaImg,
  },
  {
    id: 2,
    title: 'Kids',
    cover: kidsImg,
  },
  {
    id: 3,
    title: 'Corte',
    cover: corteImg,
  },
  {
    id: 4,
    title: 'Sobrancelha',
    cover: sobrancelhaImg,
  },
  {
    id: 5,
    title: 'Maquiagem',
    cover: maquiagemImg,
  },
];

const about : string[] = [
  "Na Fúlvio Barbershop, <b>tradição</b> e <b>inovação</b> caminham juntas. O espaço surgiu há muitos anos como referência em atendimento, e hoje se reinventa com um conceito <b>moderno</b>, <b>profissional</b> e alinhado às tendências atuais do universo masculino.<br/><br/>Nossa equipe, formada por <b>barbeiros e especialistas</b>, oferece <b>cortes</b>, <b>barba</b> e <b>cuidados premium</b> para homens de todas as idades, sempre com atenção aos detalhes, técnica e estilo.<br/><br/>Aqui, a experiência vai além do visual: é sobre <b>conforto</b>, <b>excelência</b> e <b>confiança</b>. Um ambiente pensado para receber desde crianças até clientes que nos acompanham há gerações."
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
  socials,
}