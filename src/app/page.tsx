import Image from 'next/image'
import { NavBar } from './components/navBar'
import { Header } from './components/header';
import { SectionContainer } from './components/sectionContainer';
import { ServiceCard } from './components/serviceCard';
import { projectsData, serviceData } from "./utils/data"
import { Separator } from '@/components/ui/separator';
import { SkillTabs } from './components/skillTabs';
import { ProjectCard } from './components/projectCard';
import { ContactForm } from './components/contactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary text-white">
      <div className='absolute bg-secondary clip-triangle w-full h-[100vh] top-0'/>

      <NavBar />

      <Header />

      <SectionContainer
        id='services'
        title='O QUE SEI FAZER'
        subTitle='Tenho paixão em levar a solução através da programação.'
        className='relative'
      >
        {serviceData.map((service, index) => ( 
        <ServiceCard
          key={index}
        />
        ))}

        <Separator className='bg-target w-[60%] my-20 right-0 absolute top-full'/>
      </SectionContainer>

      <SectionContainer
        id='skills'
        title='Como faço'
        subTitle='Skills'
        className='mt-40'
        slogan='Meu objetivo é encontrar soluções simples e eficientes que atendam as exigências, com o foco sempre no cliente.'
      >

        <SkillTabs/>
      </SectionContainer>

      <SectionContainer
        id='portfolio'
        title='portfólio'
        subTitle='Meus Projetos e Aplicações Recentes.'
        className='py-28 relative'
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            repo={project.repo}
            url={project.url}
            image={project.image}
            tags={project.tags}
            stack={project.stack}
          />
        ))}

        <Separator className='bg-target w-[60%] absolute left-0 bottom-0'/>
      </SectionContainer>
      
      <SectionContainer
        id='contact'
        title='vamos conversar'
        subTitle='Estou disponível para trabalho freelance.'
        className='py-28 relative'
      >
        <ContactForm />
      </SectionContainer>
    </main>
  )
}