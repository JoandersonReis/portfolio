import { TProject } from "@/components/@types";


export const projects: TProject[] = [
  {
    name: "Comprinhas",
    description: "Gerenciador de compras, com balanço de gastos. Projeto pessoal para melhorar minhas habilidades com Tailwind CSS, Prisma e Composition Pattern. Nele implementei também pagamento via pix utilizando a API da Gerencianet(Atual EFÍ Bank).",
    image: "comprinhas.svg",
    link: "https://comprinhas.website",
    technologies: ["node", "tailwind", "prisma", "react", "typescript"]
  },
  {
    name: "Seo Analytics",
    description: "Agência de marketing e seo. Projeto em conjunto com alguns amigos onde eu gerencio toda a parte de tecnologia. O diferencial do site é o blog que foi desenvolvimento 100% do zero.",
    image: "seo-analytics.svg",
    link: "https://agenciaseoanalytics.com",
    technologies: ["node", "sass", "react", "typescript", "aws"]
  },
  {
    name: "Portifólio",
    description: "Meu portifólio desenvolvido com Next, Typescript e Tailwind CSS. Também utilizei o Pattern de Composição para toda a base do projeto.",
    image: "portfolio.svg",
    link: "https://joandersonreis.vercel.app",
    github: "https://github.com/JoandersonReis/portifolio",
    technologies: [ "react", "typescript", "tailwind"]
  },
  {
    name: "Central Torrent",
    description: "Downloader de filmes torrent. Ideia pessoal que retirei do papel para melhorar minhas habilidades com AWS e Figma. ",
    image: "central-torrent.svg",
    link: "https://central-torrent.com",
    technologies: ["node", "sass", "react", "typescript", "aws"]
  },
]