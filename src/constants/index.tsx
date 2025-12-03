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
    name: 'Tiago Alves dos Santos',
    description: 'Melhores profissionais! Sempre atenciosos, com um ambiente gostoso. Possui várias vantagens, recomendo pelo menos dar um pulinho lá para conhecer, não vai se arrepender!',
    imagePath: '#',
  },
  {
    id: 2,
    name: 'Renato Bine',
    description: 'Atendimento muito bom e profissionais qualificados! Lugar bem estruturado e com espaço para poder curtir até ser atendido.',
    imagePath: '#',
  },
  {
    id: 3,
    name: 'Ana Lucia Santos',
    description: 'Super recomendo, o atendimento é de primeira e o local é bem aconchegante.Sem falar no profissionalismo.',
    imagePath: '#',
  },
  {
    id: 4,
    name: 'Kailane de Fatima França',
    description: 'Profissionais super compotentes, atendem, todas as expectativas superam o cuidado com os detalhes das noivinhas.',
    imagePath: '#',
  },
  {
    id: 5,
    name: 'Marcos Roberto Marcellino',
    description: 'Ambiente que nos deixa tranquilos para corte e barba. Além do atendimento de primeira feito pelos barbeiros e pelos donos do negócio, Ana e Fulvio. Sempre voltarei a tomar aquele chopp e sobre papo agradável. Agradeço imensamente pelo atendimento impecável. Super satisfeito. Indico a todos que querem cortar cabelo e barba da família toda. Sucesso ao negócio! Abcs, Marcos',
    imagePath: '#',
  },
  {
    id: 6,
    name: 'Alice Carneiro',
    description: 'Único lugar em Guarapuava que conseguiu manter um corte que faço a anos. Não tem outro lugar que acerte cortar meu cabelo afro. Já fui em vários lugares, e só fizeram caminho de rato na minha cabeça',
    imagePath: '#',
  },
  {
    id: 7,
    name: 'Jean Gustavo',
    description: 'Tive problemas com outro cabeleireiro, cheguei aqui contei o que ouve e fui surpreendido. Qualidade excepcional, atendimento ótimo, cabeleireiros muito competentes e comunicativos. Concerteza o melhor da região e não é o mais caro.',
    imagePath: '#'
  },
  {
    id: 8,
    name: 'Danyele Santos',
    description: 'Ótimo atendimento. Serviço de qualidade com pessoas super simpáticas. Sem falar no ambiente que é muito agradável. Super recomendo.',
    imagePath: '#'
  },
  {
    id: 9,
    name: 'Francisco Lopes Silva Junior',
    description: 'Local e atendimento excelente. Tudo pensado para o bem estar do cliente.',
    imagePath: '#'
  },
  {
    id: 10,
    name: 'Vanessa Graciliano',
    description: 'Sou de Maringá e fiquei encantada com o atendimento do salão, a Manicure Suelen e a Cabeleireira Ana são super simpáticas e muito atenciosas. O ambiente é muito agradável e o preço justo. Super indico.',
    imagePath: '#'
  },
  {
    id: 11,
    name: 'Isabelle Santos',
    description: 'Salão excelente, otimos profissionais , make e cabelo duraram a noite toda,fui muito bem atendida,me senti uma princesa haha',
    imagePath: '#'
  },
  {
    id: 12,
    name: 'Arao antunes',
    description: 'Além do serviço ser de ótima qualidade, o ambiente é sensacional, com sala de jogos e chopp incrível!!',
    imagePath: '#'
  },
  {
    id: 13,
    name: 'Alexandre A C Oliveira',
    description: 'Os proprietários têm um atendimento top, uma conserva alto astral... meu atendimento é com Bruno muitas qualidades e serviços de sucesso.',
    imagePath: '#'
  },
  {
    id: 14,
    name: 'Joãozinho Camargo',
    description: 'Não recomendo. Consultei sobre um serviço e me informaram um valor de mais de mil reais. Ocorre que, a 500 metros dali, o Zé Cabeleireiro, fez por 200,00.',
    imagePath: '#'
  },
  {
    id: 15,
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

export {
  logo,
  hero,
  feedbacks,
  navLinks,
}