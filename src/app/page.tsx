import Image from 'next/image'
import { NavBar } from './components/navBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-0 p-24 bg-primary relative z-[-1]">
        <div className='absolute bg-secondary clip-triangle w-full h-[100vh] z-0 top-0'></div>
        
        <section className='w-full h-[100vh]'>
          <NavBar/>

          <div className='flex items-center justify-around'>
            <figure>
              <Image
                src="/next.svg"
                alt=''
                width={200}
                height={200}
                className='rounded-full border'
              />
            </figure>

            <h1 className='w-96'> 
              olá, Meu nome é André Luís. Sou desenvolvedor. Ajudo você a criar 
              <span className='text-base bg-clip-text text-transparent bg-target'>Web sites</span>  
            </h1>
          </div>
        </section>
    </main>
  )
}