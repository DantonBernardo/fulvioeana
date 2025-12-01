import type { Service } from "../types/Service";
import type { Social } from "../types/Social";
import type { Faq } from "../types/Faq";

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
    cover: '#',
  },
  {
    id: 2,
    title: 'Corte',
    cover: '#',
  },
  {
    id: 3,
    title: 'Sobrancelha',
    cover: '#',
  },
  {
    id: 4,
    title: 'Kids',
    cover: '#',
  },
  {
    id: 5,
    title: 'Manicure',
    cover: '#',
  },
  {
    id: 6,
    title: 'Tintura',
    cover: '#',
  },
  {
    id: 7,
    title: 'Maquiagem',
    cover: '#',
  },
  {
    id: 8,
    title: 'Feminino',
    cover: '#',
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