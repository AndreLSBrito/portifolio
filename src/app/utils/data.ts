
import { SocialLinkProps } from "../components/socialLink";
import { infoCardDataType } from "../components/infoCard";
import { ServiceCardProps } from "../components/serviceCard";

export const serviceData:ServiceCardProps[] = [
  {
    iconName: "TabletSmartphone",
    service: "Desenvolvimento de Aplicativos Móveis",
    description: "Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.",
  },
  {
    iconName: "PaintBucket" ,
    service: "Design Gráfico",
    description: "Vou dar vida a sua ideia com artes visuais de extrema qualidade",
  },
  {
    iconName: "Laptop"  ,
    service: "Desenvolvimento Web",
    description: "Irei desenvolver a solução ideal para você, desde sites institucionais a softwares complexos",
  },
  {
    iconName: "ThumbsUp" ,
    service: "Social Media",
    description: "Posso gerenciar sue rede social, promovendo mais engajamento através de posts, reels, enquetes e stories, além de projetar todo o aspecto visual de sua marca.",
  },
  {
    iconName: "LineChart" ,
    service: "Projetos de Desenvolvimento",
    description: "Confie em minhas habilidades para integrar ao seu time de desenvolvedores, para entregas com qualidade, agilidade e colaboração.",
  },
]

export type AreaType = ('front' | 'back' | 'data' | 'design')

type SkillDataProps = {
  image: string;
  name: string;
  area: AreaType[]
}

export const skillsData: SkillDataProps[] = [
  {
    image: 'html5/html5-original.svg',
    name: 'HTML',
    area: ["front"]
  },
  {
    image: 'css3/css3-original.svg',
    name: 'CSS',
    area: ["front"]
  },
  {
    image: 'javascript/javascript-original.svg',
    name: 'JavaScript',
    area: ["front", "back"]
  },
  {
    image: 'typescript/typescript-original.svg',
    name: 'TypeScript',
    area: ["front", "back"]
  },
  {
    image: 'react/react-original.svg',
    name: 'React',
    area: ["front"]
  },
  {
    image: 'tailwindcss/tailwindcss-plain.svg',
    name: 'Tailwindcss',
    area: ["front"]
  },
  {
    image: 'nextjs/nextjs-original.svg',
    name: 'Nextjs',
    area: ["front"]
  },
  {
    image: 'react/react-original.svg',
    name: 'React Native',
    area: ["front"]
  },
  {
    image: 'nodejs/nodejs-original.svg',
    name: 'NodeJs',
    area: ["back"]
  },
  {
    image: 'python/python-original.svg',
    name: 'Python',
    area: ["data", "back"]
  },
  {
    image: 'microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
    name: 'SQL Server',
    area: ["data"]
  },
  {
    image: 'postgresql/postgresql-original-wordmark.svg',
    name: 'PostgreSQL',
    area: ["data"]
  },
  {
    image: 'figma/figma-original.svg',
    name: 'Figma',
    area: ["design"]
  },
  {
    image: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS',
    area: ["back"]
  },
  {
    image: 'oracle/oracle-original.svg',
    name: 'Oracle',
    area: ["data"]
  },
]

export type projectType = {
  name: string
  repo: string
  url?: string
  image: string
  description: string
  tags: string[],
  stack: "Frontend" | "Fullstack" | "Mobile"
}

export const projectsData: projectType[] = [
  {
    name: 'FSW-Trip',
    repo: 'https://github.com/AndreLSBrito/FSW-Trip',
    url: 'https://fsw-trip.vercel.app/',
    image:
      'https://raw.githubusercontent.com/AndreLSBrito/FSW-Trip/main/public/Capa.png',
    description:
      'Aplicação full stack de reservas de viagens proporciona aos usuários uma experiência completa e conveniente ao planejar suas viagens.',
    tags: ['Next', 'typescript', 'tailwind', 'axios', 'api'],
    stack: "Fullstack"
  },
  {
    name: 'App Controle de Tarefas',
    repo: 'https://github.com/AndreLSBrito/appToDoList',
    image:
      'https://github.com/AndreLSBrito/appToDoList/blob/main/assets/preview.png?raw=true',
    description:
      'Aplicação criada em React Native no intuito de cumprir o desafio da RocktSeat para o módulo de fundamentos do React Native',
    tags: ['React Native', 'TypeScript', 'Expo', 'Figma'],
    stack: "Mobile"
  },
  {
    name: 'Agregador de Links',
    repo: 'https://github.com/AndreLSBrito/Links',
    url: 'https://andrelsbrito.github.io/Links/',
    image:
      'https://github.com/AndreLSBrito/Links/blob/main/assets/preview.jpg?raw=true',
    description:
      'O DevLinks é um agregador de links para usar como cartão de visitas online.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    stack: "Frontend"
  },
  
]

export const contactData: infoCardDataType[] = [
  {
    iconName: "MapPinned",
    title: 'Localização',
    description: 'Brasil, Minas Gerais, Arcos'
  },
  {
    iconName: "Mail",
    title: 'Email',
    description: 'andrelsbrito2022@gmail.com'
  },
  {
    iconName: "Phone",
    title: 'WhatsApp',
    description: '+55 37 99127-7762'
  },
]

export const newsData:infoCardDataType[] = [
  {
    image: 'https://i.ibb.co/d7FczYy/Screenshot-2023-09-09-at-21-06-42-Frontend-Mentor-Rock-Paper-Scissors.png',
    description: 'Nova interface para o site',
    date: '17 de nov 2023'
  },
  {
    image: 'https://i.ibb.co/RbKxdN9/Screenshot-2023-09-09-at-20-41-40-Frontend-Mentor-Shortly-URL-shortening-API-Challenge.png',
    description: 'Novas regras ao jogo',
    date: '17 de nov 2023'
  },
  {
    image: 'https://i.ibb.co/Wg5GvD2/Screenshot-2023-07-15-at-23-25-42-Frontend-Mentor-Todo-app.png',
    description: 'Nova interface para o site',
    date: '17 de nov 2023'
  },
]

export const socialLinks:SocialLinkProps[] = [
  {
    iconName: "Linkedin" ,
    link: 'https://www.linkedin.com/in/andrelsbrito/'
  },
  {
    iconName: "Instagram",
    link: 'https://www.instagram.com/andrelsbrito.dev/'
  },
  {
    iconName: "Github",
    link: 'https://github.com/AndreLSBrito'
  },
]