import type { Faq } from "../types/Faq";
import type { Feedback } from "../types/Feedback";
import type { Hero } from "../types/Hero";
import type { NavLink } from "../types/NavLink";

const logo = [
  '/assets/images/fulvio.svg',
  '/assets/images/ana.svg'
]

const hero : Hero[] = [
  {
    bg: '/assets/images/bg-fulvio.png',
    title: "Seu estilo merece respeito",
    subtitle: (
      <>
        Da barba ao corte,<br/>
        a barbearia feita para <span>você</span>
      </>
    )
  },
  {
    bg: '/assets/images/bg-ana.png',
    title: "Sua beleza merece destaque",
    subtitle: (
      <>
        Do cuidado ao estilo,<br/>
        o salão pensado em cada <span>detalhe</span>
      </>
    )
  },
];

const feedbacks : Feedback[] = [
  {
    id: 1,
    name: 'Renato Bine',
    description: 'Atendimento muito bom e profissionais qualificados! Lugar bem estruturado e com espaço para poder curtir até ser atendido.',
    imagePath: '#',
  },
  {
    id: 2,
    name: 'Ana Lucia Santos',
    description: 'Super recomendo, o atendimento é de primeira e o local é bem aconchegante.Sem falar no profissionalismo.',
    imagePath: '#',
  },
  {
    id: 3,
    name: 'Kailane de Fatima França',
    description: 'Profissionais super compotentes, atendem, todas as expectativas superam o cuidado com os detalhes das noivinhas.',
    imagePath: '#',
  },
  {
    id: 4,
    name: 'Alice Carneiro',
    description: 'Único lugar em Guarapuava que conseguiu manter um corte que faço a anos. Não tem outro lugar que acerte cortar meu cabelo afro. Já fui em vários lugares, e só fizeram caminho de rato na minha cabeça',
    imagePath: '#',
  },
  {
    id: 5,
    name: 'Danyele Santos',
    description: 'Ótimo atendimento. Serviço de qualidade com pessoas super simpáticas. Sem falar no ambiente que é muito agradável. Super recomendo.',
    imagePath: '#'
  },
  {
    id: 6,
    name: 'Francisco Lopes Silva Junior',
    description: 'Local e atendimento excelente. Tudo pensado para o bem estar do cliente.',
    imagePath: '#'
  },
  {
    id: 7,
    name: 'Vanessa Graciliano',
    description: 'Sou de Maringá e fiquei encantada com o atendimento do salão, a Manicure Suelen e a Cabeleireira Ana são super simpáticas e muito atenciosas. O ambiente é muito agradável e o preço justo. Super indico.',
    imagePath: '#'
  },
  {
    id: 8,
    name: 'Isabelle Santos',
    description: 'Salão excelente, otimos profissionais , make e cabelo duraram a noite toda,fui muito bem atendida,me senti uma princesa haha',
    imagePath: '#'
  },
  {
    id: 9,
    name: 'Arao antunes',
    description: 'Além do serviço ser de ótima qualidade, o ambiente é sensacional, com sala de jogos e chopp incrível!!',
    imagePath: '#'
  },
  {
    id: 10,
    name: 'Alexandre A C Oliveira',
    description: 'Os proprietários têm um atendimento top, uma conserva alto astral... meu atendimento é com Bruno muitas qualidades e serviços de sucesso.',
    imagePath: '#'
  },
  {
    id: 11,
    name: 'Joãozinho Camargo',
    description: 'Não recomendo. Consultei sobre um serviço e me informaram um valor de mais de mil reais. Ocorre que, a 500 metros dali, o Zé Cabeleireiro, fez por 200,00.',
    imagePath: '#'
  },
  {
    id: 12,
    name: 'Roberto Borelli',
    description: 'Uma barbearia ótima, ambiente limpo e sem cabelos por todo o chão. Antendimento muito atencioso pelos funcionários e banheiro ótimo.',
    imagePath: '#'
  },
]

const navLinks : NavLink[] = [
  {
    id: 1,
    name: 'Serviços',
    href: 'servicos',
  },
  {
    id: 2,
    name: 'Feedbacks',
    href: 'feedbacks',
  },
  {
    id: 3,
    name: 'Nosso App',
    href: 'app',
  },
  {
    id: 4,
    name: 'FAQ',
    href: 'faq',
  },
]

const faq : Faq[] = [
  {
    id: 1,
    question: 'Vocês oferecem o “Dia da Noiva” e o “Dia do Noivo”?',
    awnser: 'Sim! Temos pacotes completos para Dia da Noiva e Dia do Noivo, incluindo cabelo, maquiagem, barba, manicure, pedicure e preparação especial para fotos. Também personalizamos o pacote conforme a necessidade do casal.',
  },
  {
    id: 2,
    question: 'Quais serviços o salão oferece?',
    awnser: 'Trabalhamos com uma gama completa de serviços: cortes masculino, feminino e infantil, escovas, lavagem e secagem, penteados, sobrancelha, acabamento na navalha, progressiva masculina, mechas, ombré hair, matização, tratamentos (como selagem, reconstrução Joico e encaixe) e muito mais. Tudo pode ser personalizado conforme a sua necessidade.',
  },
  {
    id: 3,
    question: 'Atendem noivas e madrinhas no local do evento?',
    awnser: 'No momento, não realizamos atendimento externo. Todos os serviços são feitos exclusivamente no salão, garantindo estrutura, iluminação e equipamentos adequados para um resultado impecável.',
  },
  {
    id: 4,
    question: 'Trabalham com coloração e mechas?',
    awnser: 'Sim! Realizamos coloração, mechas, luzes, ombré hair, matização e outros serviços de transformação e realce da cor, sempre com técnicas atualizadas e produtos de alta qualidade.',
  },
  {
    id: 5,
    question: 'Vocês fazem penteados e maquiagem para eventos?',
    awnser: 'Sim! Realizamos penteados e maquiagens para todos os tipos de eventos — desde formaturas e aniversários até produções mais sofisticadas para casamentos. Nosso serviço é extremamente cuidadoso, personalizado e de alta qualidade, garantindo que você saia pronta(o) para brilhar em qualquer ocasião.',
  },
  {
    id: 6,
    question: 'Têm serviços de hidratação e reconstrução capilar?',
    awnser: 'Sim. Trabalhamos com diversos tratamentos capilares, incluindo hidratação, reconstrução, selagem, alisamentos e protocolos profissionais para recuperar, fortalecer e alinhar os fios.',
  },
  {
    id: 7,
    question: 'O local atende crianças?',
    awnser: 'Sim! Atendemos crianças e, inclusive, contamos com um espaço especial para elas. É uma área segura e confortável, pensada para que os pequenos possam esperar e se divertir enquanto realizamos os serviços. Assim, os pais conseguem aproveitar o atendimento com tranquilidade, e as crianças ficam à vontade durante toda a visita.',
  },
]

export {
  logo,
  hero,
  feedbacks,
  navLinks,
  faq,
}