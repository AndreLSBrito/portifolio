
import { CiMobile4 } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import { ReactNode } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IconProps } from "../components/icon";
import { SocialLinkProps } from "../components/socialLink";
import { infoCardDataType } from "../components/infoCard";


export const serviceData = [
  {
    service: "Soluções de Aplicativos Móveis Personalizadas",
    description: "Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.",
    icon: CiMobile4 ,
  },
  {
    service: "Soluções de Aplicativos Móveis Personalizadas",
    description: "Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.",
    icon: CiMobile4 ,
  },
  {
    service: "Soluções de Aplicativos Móveis Personalizadas",
    description: "Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.",
    icon: CiMobile4  ,
  },
  {
    service: "Soluções de Aplicativos Móveis Personalizadas",
    description: "Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.",
    icon: CiMobile4 ,
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
  stack: "Frontend" | "Fullsatck" | "Mobile"
}

export const projectsData: projectType[] = [
  {
    name: 'Countries App',
    repo: 'https://github.com/grazziotti/rest-countries-api',
    url: 'https://rest-countries-api-grazziotti.vercel.app/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description:
      'O Countries App é um aplicativo web que fornece informações sobre diferentes países ao redor do mundo.',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api'],
    stack: "Frontend"
  },
  {
    name: 'Space Tourism Website',
    repo: 'https://github.com//grazziotti/space-tourism-website',
    url: 'https://space-tourism-website-grazziotti.vercel.app/',
    image:
      'https://i.ibb.co/c17p422/Screenshot-2023-07-16-at-00-54-48-Space-Tourism-Website.png',
    description: 'Multi-page Website com tema espacial.',
    tags: ['react', 'typescript', 'styled-components'],
    stack: "Frontend"
  },
  {
    name: 'Interactive comments section',
    repo: 'https://github.com/grazziotti/interactive-comments-section',
    url: 'https://interactive-comments-section-eta.vercel.app/',
    image:
      'https://i.ibb.co/4WNm2qY/Screenshot-2023-07-14-at-23-31-53-Frontend-Mentor-Interactive-comments-section.png',
    description: 'Seção de comentários interativos. CRUD. client-side.',
    tags: ['react', 'typescript', 'styled-components'],
    stack: "Frontend"
  },
  {
    name: 'Job listings with filtering',
    repo: 'https://github.com/grazziotti/job-listings-with-filtering',
    url: 'https://job-listings-with-filtering-khaki.vercel.app/',
    image:
      'https://i.ibb.co/47J3Fjt/Screenshot-2023-09-09-at-20-29-20-Frontend-Mentor-Job-Listings.png',
    description: 'Listagem de dados locais com filtragem.',
    tags: ['react', 'typescript', 'bem'],
    stack: "Frontend"
  },
  {
    name: 'ToDo App',
    repo: 'https://github.com/grazziotti/todo-app',
    url: 'https://grazziotti.github.io/todo-app/',
    image:
      'https://i.ibb.co/Wg5GvD2/Screenshot-2023-07-15-at-23-25-42-Frontend-Mentor-Todo-app.png',
    description: 'Um aplicativo de lista de tarefas.',
    tags: ['html', 'css', 'javascript', 'bem'],
    stack: "Frontend"
  },
  {
    name: 'Weather App',
    repo: 'https://github.com/grazziotti/weather-app',
    url: 'https://grazziotti.github.io/weather-app',
    image:
      'https://i.ibb.co/zhPsH8D/Screenshot-2023-09-09-at-21-02-56-Weather-App.png',
    description:
      'Aplicação que fornece informações atualizadas sobre o clima em qualquer lugar do mundo.',
    tags: ['html', 'css', 'javascript', 'api'],
    stack: "Frontend"
  },
  {
    name: 'Url shortening',
    repo: 'https://github.com/grazziotti/url-shortening-api-landing-page',
    url: 'https://grazziotti.github.io/url-shortening-api-landing-page',
    image:
      'https://i.ibb.co/RbKxdN9/Screenshot-2023-09-09-at-20-41-40-Frontend-Mentor-Shortly-URL-shortening-API-Challenge.png',
    description:
      'Uma Landing Page com um encurtador de URL que simplifica links longos em URLs curtas e fáceis de compartilhar.',
    tags: ['html', 'css', 'javascript', 'bem', 'api'],
    stack: "Frontend"
  },
  {
    name: 'Rock-paper-scissors Game',
    repo: 'https://github.com/grazziotti/rock-paper-scissors-game',
    url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
    image:
      'https://i.ibb.co/d7FczYy/Screenshot-2023-09-09-at-21-06-42-Frontend-Mentor-Rock-Paper-Scissors.png',
    description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
    tags: ['html', 'css', 'javascript', 'bem'],
    stack: "Frontend"
  }
]


export const contactData: infoCardDataType[] = [
  {
    iconName: "map-pinned",
    title: 'Localização',
    description: 'Brasil, Minas Gerais, Arcos'
  },
  {
    iconName: "mail",
    title: 'Email',
    description: 'andrelsbrito2022@gmail.com'
  },
  {
    iconName: "phone",
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
    iconName: "linkedin",
    link: 'https://www.linkedin.com/in/andrelsbrito/'
  },
  {
    iconName: "instagram",
    link: 'https://www.instagram.com/andrelsbrito.dev/'
  },
  {
    iconName: "github",
    link: 'https://github.com/AndreLSBrito'
  },
]