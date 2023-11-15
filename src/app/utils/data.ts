import { CiMobile4 } from "react-icons/ci";


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