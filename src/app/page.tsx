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
import { Footer } from './components/footer';

export default function Home() {
  return (
    <main className="flex px-16 w-full max-w-[1300px]  min-h-screen flex-col items-center justify-evenly bg-primary text-white">
      <div className='absolute bg-secondary clip-triangle w-full h-full bottom-0'/>

     

      <Header />

      <SectionContainer
        id='services'
        title='O QUE SEI FAZER'
        subTitle='Tenho paixão em levar a solução através da programação.'
        className='py-28 relative'
      >
        <div className='flex flex-col md:grid md:grid-cols-2 gap-5 mt-5'>
          {serviceData.map((service, index) => ( 
            <ServiceCard
              key={index}
              service={service.service}
              description={service.description}
              iconName={service.iconName}
            />
          ))}
        </div>

        <div className='absolute w-[98.7dvw] bottom-0'>
          <Separator className='bg-target w-[60%] absolute right-0'/>
        </div>
      </SectionContainer>

      <SectionContainer
        id='skills'
        title='Como faço'
        subTitle='Skills'
        className='mt-28'
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
        <div className='grid grid-cols-auto-fit-300 md:w-full sm:mx-auto justify-center gap-12'>
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
        </div>

        <div className='absolute w-[98.7dvw] bottom-0'>
          <Separator className='bg-target w-[60%] absolute bottom-0 left-0'/>
        </div>
      </SectionContainer>
        
      
      <SectionContainer
        id='contact'
        title='vamos conversar'
        subTitle='Estou disponível para trabalho freelance.'
        className='relative'
      >
        <ContactForm />
      </SectionContainer>

      <SectionContainer
        id='footer'
        title='social'
        subTitle='Me acompanhe nas redes sociais e saiba mais'
        className='pb-28 relative'
      />

      <Footer />
    </main>
  )
}