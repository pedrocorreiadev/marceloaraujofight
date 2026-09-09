export const site = {
  name: "Marcelo Araújo Fight",
  city: "Rio Branco - Acre",
  address: "Rua LBA Vila Betel, 208",
  instagram: "https://www.instagram.com/marceloaraujofight/",
  logo: {
    src: "/media/brand/logo.png",
    width: 707,
    height: 707,
    alt: "Logo Marcelo Araújo Fight com leão de olhos vermelhos.",
  },
  phones: {
    whatsappDisplay: "(68) 98424-8326",
    whatsappE164: "5568984248326",
    additionalDisplay: "(68) 98426-7776",
    additionalE164: "5568984267776",
  },
  hero: {
    title: "MARCELO ARAÚJO FIGHT",
    titleLines: ["MARCELO ARAÚJO", "FIGHT"],
    kicker: "Força, técnica e disciplina para evoluir.",
    description: "Boxe, kickboxing e jiu-jitsu.",
    background: {
      src: "/media/hero/hero-background.webp",
      width: 2092,
      height: 1395,
      alt: "Arte com leão, logo Marcelo Araújo Fight e bandeira do Acre.",
    },
  },
  modalities: [
    {
      name: "Boxe",
      description:
        "Treinos voltados para base, postura, defesa, movimentação e evolução técnica no ritmo de cada aluno.",
      feature: "Base • Defesa • Movimentação",
      cta: "Consultar Boxe",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Boxe.",
    },
    {
      name: "Kickboxing",
      description:
        "Aulas com foco em golpes, combinações, condicionamento e disciplina para diferentes níveis de prática.",
      feature: "Combinações • Ritmo • Condicionamento",
      cta: "Consultar Kickboxing",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Kickboxing.",
    },
    {
      name: "Jiu-jitsu",
      description:
        "Treino técnico para aprender controle, defesa, posições e progressão com orientação próxima.",
      feature: "Controle • Defesa • Progressão",
      cta: "Consultar Jiu-jitsu",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Jiu-jitsu.",
    },
  ],
  trainers: [
    {
      name: "Marcelo Araújo",
      title: "Professor",
      graduation: "Faixa preta graduado",
      image: {
        src: "/media/photos/professor-marcelo.webp",
        width: 1254,
        height: 1254,
        alt: "Professor Marcelo Araújo em registro real usando uniforme da academia.",
      },
    },
    {
      name: "Ellen Araújo",
      title: "Professora",
      graduation: "Faixa preta graduada",
      image: {
        src: "/media/photos/professora-ellen.webp",
        width: 1254,
        height: 1254,
        alt: "Professora Ellen Araújo ajustando a faixa preta durante treino na academia.",
      },
    },
  ],
  kickboxingSchedule: ["09h às 10h", "15h às 16h", "19h30 às 20h30"],
  videos: [
    {
      title: "Boxe e kickboxing",
      modality: "Boxe • Kickboxing",
      description: "Prática técnica com ritmo de aula real e acompanhamento próximo.",
      src: "/media/videos/treino-boxe-kickboxing.mp4",
      poster: "/media/videos/treino-boxe-kickboxing.webp",
      width: 1280,
      height: 720,
    },
    {
      title: "Treino técnico",
      modality: "Rotina da academia",
      description: "Registro vertical da evolução diária dentro da Marcelo Araújo Fight.",
      src: "/media/videos/treino-tecnico.mp4",
      poster: "/media/videos/treino-tecnico.webp",
      width: 716,
      height: 1274,
    },
    {
      title: "Treino em equipe",
      modality: "Equipe",
      description: "Energia de turma em um treino real com alunos da academia.",
      src: "/media/videos/marcelo equipe 2.mp4",
      poster: "/media/photos/turma-equipe-kickboxing.webp",
      width: 480,
      height: 864,
    },
  ],
  galleryPhotos: [
    {
      src: "/media/photos/turma-equipe-kickboxing.webp",
      width: 1280,
      height: 960,
      alt: "Turma da Marcelo Araújo Fight reunida no tatame após treino.",
      caption: "Equipe no tatame",
    },
    {
      src: "/media/photos/turma-equipe-marcelo-fight.webp",
      width: 1800,
      height: 1350,
      alt: "Alunos da Marcelo Araújo Fight reunidos dentro da academia.",
      caption: "Disciplina em equipe",
    },
  ],
  community: {
    title: "MAIS QUE UMA ACADEMIA",
    text: "Treino também é parceria, respeito e evolução em equipe.",
    photo: {
      src: "/media/photos/turma-equipe-marcelo-fight.webp",
      width: 1800,
      height: 1350,
      alt: "Equipe e alunos reunidos na academia Marcelo Araújo Fight.",
    },
  },
  personalFight: {
    title: "PERSONAL FIGHT",
    subtitle: "Treino individualizado para quem busca evolução focada.",
    features: ["Treino individual", "Pequenos grupos", "Acompanhamento próximo"],
    image: {
      src: "/media/photos/professor-marcelo.webp",
      width: 1254,
      height: 1254,
      alt: "Professor Marcelo Araújo em registro real da equipe Marcelo Araújo Fight.",
    },
  },
};

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#professores", label: "Professores" },
  { href: "#videos", label: "Treinos" },
  { href: "#horarios", label: "Horários" },
  { href: "#contato", label: "Contato" },
];

const defaultMessage =
  "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de agendar uma aula experimental.";

export function whatsappLink(message = defaultMessage) {
  return `https://wa.me/${site.phones.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address}, ${site.city}`,
)}`;
