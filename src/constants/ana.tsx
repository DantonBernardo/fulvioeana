// Types
import type { Faq } from "../types/Faq";
import type { Service } from "../types/Service";
import type { Social } from "../types/Social";

// Images
import cabeloImg from '../assets/images/servicos/cabelo.png';
import maquiagemImg from '../assets/images/servicos/maquiagem.png';
import sobrancelhaImg from '../assets/images/servicos/sobrancelha.png';
import masculinoImg from '../assets/images/servicos/barba.png';

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
  socials
}