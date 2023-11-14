import Image from 'next/image'
import { NavBar } from './components/navBar'
import { Header } from './components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary ">
      <div className='absolute bg-secondary clip-triangle w-full h-[100vh] top-0'/>

      <NavBar />

      <Header />
    </main>
  )
}