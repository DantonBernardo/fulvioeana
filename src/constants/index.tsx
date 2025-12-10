import type { Faq } from "../types/Faq";
import type { Feedback } from "../types/Feedback";
import type { Hero } from "../types/Hero";
import type { NavLink } from "../types/NavLink";
import type { About } from "../types/About";

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
        a barbearia feita para <b>você</b>
      </>
    )
  },
  {
    bg: '/assets/images/bg-ana.png',
    title: "Sua beleza merece destaque",
    subtitle: (
      <>
        Do cuidado ao estilo,<br/>
        o salão pensado em cada <b>detalhe</b>
      </>
    )
  },
];

const about : About[] = [
  {
    text: (
      <>
        Na Fúlvio Barbershop, <b>tradição</b> e <b>inovação</b> caminham juntas. O espaço surgiu há muitos anos como referência em atendimento, e hoje se reinventa com um conceito <b>moderno</b>, <b>profissional</b> e alinhado às tendências atuais do universo masculino.
        <br/>

        <span className="block h-2"></span>
        
        Nossa equipe, formada por <b>barbeiros e especialistas</b>, oferece <b>cortes</b>, <b>barba</b> e <b>cuidados premium</b> para homens de todas as idades, sempre com atenção aos detalhes, técnica e estilo.
        <br/>

        <span className="block h-2"></span>
        Aqui, a experiência vai além do visual: é sobre <b>conforto</b>, <b>excelência</b> e <b>confiança</b>. Um ambiente pensado para receber desde crianças até clientes que nos acompanham há gerações.
      </>
    )
  },
  {
    text: (
      <>
        Aqui na Ana Maria Cabelo & Estética, a beleza é tratada com <b>técnica</b>, <b>sensibilidade</b> e <b>excelência</b>. O espaço feminino evoluiu ao longo dos anos e hoje oferece um atendimento <b>moderno</b>, <b>acolhedor</b> e totalmente personalizado para cada cliente.<br/><br/>Trabalhamos com <b>cabelo</b>, <b>maquiagem</b>, <b>design de sobrancelhas</b>, <b>estética</b> e cuidados completos de beleza — sempre com atenção aos detalhes, produtos de alta performance e um padrão de qualidade que acompanha as tendências sem perder a essência profissional.<br/><br/>Aqui, a experiência é sobre <b>bem-estar</b>, <b>confiança</b> e se sentir ainda mais bonita, seja para o dia a dia ou para momentos realmente especiais.
      </>
    )
  }
]

const feedbacks : Feedback[] = [
  {
    id: 1,
    name: 'Renato B.',
    description: 'Atendimento muito bom e profissionais qualificados! Lugar bem estruturado e com espaço para poder curtir até ser atendido.',
    imagePath: '#',
  },
  {
    id: 2,
    name: 'Ana L.',
    description: 'Super recomendo, o atendimento é de primeira e o local é bem aconchegante.Sem falar no profissionalismo.',
    imagePath: '#',
  },
  {
    id: 3,
    name: 'Kailane de F.',
    description: 'Profissionais super compotentes, atendem, todas as expectativas superam o cuidado com os detalhes das noivinhas.',
    imagePath: '#',
  },
  {
    id: 4,
    name: 'Alice C.',
    description: 'Único lugar em Guarapuava que conseguiu manter um corte que faço a anos. Não tem outro lugar que acerte cortar meu cabelo afro. Já fui em vários lugares, e só fizeram caminho de rato na minha cabeça',
    imagePath: '#',
  },
  {
    id: 5,
    name: 'Danyele S.',
    description: 'Ótimo atendimento. Serviço de qualidade com pessoas super simpáticas. Sem falar no ambiente que é muito agradável. Super recomendo.',
    imagePath: '#'
  },
  {
    id: 6,
    name: 'Francisco L.',
    description: 'Local e atendimento excelente. Tudo pensado para o bem estar do cliente.',
    imagePath: '#'
  },
  {
    id: 8,
    name: 'Isabelle S.',
    description: 'Salão excelente, otimos profissionais , make e cabelo duraram a noite toda,fui muito bem atendida,me senti uma princesa haha',
    imagePath: '#'
  },
  {
    id: 9,
    name: 'Arao A.',
    description: 'Além do serviço ser de ótima qualidade, o ambiente é sensacional, com sala de jogos e chopp incrível!!',
    imagePath: '#'
  },
  {
    id: 10,
    name: 'Alexandre A.',
    description: 'Os proprietários têm um atendimento top, uma conserva alto astral... meu atendimento é com Bruno muitas qualidades e serviços de sucesso.',
    imagePath: '#'
  },
  {
    id: 11,
    name: 'Roberto B.',
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
  about,
  hero,
  feedbacks,
  navLinks,
  faq,
}