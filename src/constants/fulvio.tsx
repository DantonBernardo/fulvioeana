// Types
import type { Service } from "../types/Service";
import type { Social } from "../types/Social";
import type { Faq } from "../types/Faq";

// Images
import barbaImg from '../assets/images/servicos/barba.png';
import sobrancelhaImg from '../assets/images/servicos/sobrancelha.png';
import corteImg from '../assets/images/servicos/corte.png';
import kidsImg from '../assets/images/servicos/kids.png';
import maquiagemImg from '../assets/images/servicos/maquiagem.png';

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
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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