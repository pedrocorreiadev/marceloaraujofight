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
    description:
      "Boxe, kickboxing e jiu-jitsu para todos os níveis em Rio Branco.",
    background: {
      src: "/media/hero/hero-background.webp",
      width: 2092,
      height: 1395,
      alt: "Arte com leão, logo Marcelo Araújo Fight e bandeira do Acre.",
    },
    overlay: {
      src: "",
      width: 941,
      height: 1672,
      alt: "Arte promocional de kickboxing com professora Ellen Araújo e professor Marcelo Araújo.",
    },
  },
  modalities: [
    {
      name: "Boxe",
      description:
        "Treinos voltados para base, postura, defesa, movimentação e evolução técnica no ritmo de cada aluno.",
      short: "Base, defesa e movimentação.",
      cta: "Consultar turmas de Boxe",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Boxe.",
    },
    {
      name: "Kickboxing",
      description:
        "Aulas com foco em golpes, combinações, condicionamento e disciplina para diferentes níveis de prática.",
      short: "Combinações, ritmo e disciplina.",
      cta: "Consultar turmas de Kickboxing",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Kickboxing.",
    },
    {
      name: "Jiu-jitsu",
      description:
        "Treino técnico para aprender controle, defesa, posições e progressão com orientação próxima.",
      short: "Controle, defesa e progressão.",
      cta: "Consultar turmas de Jiu-jitsu",
      message:
        "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar turmas de Jiu-jitsu.",
    },
  ],
  trainers: [
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
  ],
  kickboxingSchedule: ["09h às 10h", "15h às 16h", "19h30 às 20h30"],
  videos: [
    {
      title: "Treino guiado",
      description:
        "Prática técnica em aula, com orientação próxima e ritmo de treino real.",
      src: "/media/videos/treino-boxe-kickboxing.mp4",
      poster: "/media/videos/treino-boxe-kickboxing.webp",
      width: 1280,
      height: 720,
    },
    {
      title: "Rotina da academia",
      description:
        "Registro vertical de treino coletivo dentro do espaço da Marcelo Araújo Fight.",
      src: "/media/videos/treino-tecnico.mp4",
      poster: "/media/videos/treino-tecnico.webp",
      width: 716,
      height: 1274,
    },
  ],
  teamPhotos: [
    {
      src: "/media/photos/turma-treino-1.webp",
      width: 640,
      height: 480,
      alt: "Turma reunida após treino na academia Marcelo Araújo Fight.",
      caption: "Turma após treino",
    },
    {
      src: "/media/photos/turma-treino-2.webp",
      width: 640,
      height: 551,
      alt: "Equipe e alunos reunidos no tatame da Marcelo Araújo Fight.",
      caption: "Convivência no tatame",
    },
  ],
};

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#professores", label: "Professores" },
  { href: "#videos", label: "Vídeos" },
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
