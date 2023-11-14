import Image from 'next/image'
import { NavBar } from './components/navBar'
import { Header } from './components/header';
import { SectionContainer } from './components/sectionContainer';
import { ServiceCard } from './components/serviceCard';
import { serviceData } from "./utils/data"

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
      >
       {serviceData.map((service, index) => ( 
        <ServiceCard/>
       ))}
      </SectionContainer>
    </main>
  )
}