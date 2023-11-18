import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

export function Header() {
  return(
    <header className='flex flex-col items-center justify-evenly w-full h-[100vh] py-0 px-20 z-10'>
        <div className='flex flex-wrap gap-8 items-center justify-around'>
          <figure>
            <Image
              src="/profile.svg"
              alt='Foto de perfil'
              width={200}
              height={200}
              style={{objectFit: "contain"}}
              className="w-auto h-auto"
            />
          </figure>

          <h1 className='w-96 text-white text-2xl'> 
            Olá, Meu nome é André Luís. Sou desenvolvedor. Ajudo você a criar 

            <span className='bg-clip-text text-transparent bg-target text-2xl'> Web sites</span>

            <span className='animate-pulse2 text-2xl'>|</span> 
          </h1>
        </div>

        <div className='flex flex-col w-full text-white'>
          <Separator
            className='bg-target w-[60%] absolute left-0'
          />

          <ul className='gap-10 flex flex-col my-4'>
            <li className='flex text-4xl gap-4 items-center'>+10 <p className='text-neutral-400/70 text-xs '>ANOS DE <br/> PROJETOS TECH</p></li>
            
            <li className='flex text-4xl gap-4 items-center'>+6 <p className='text-neutral-400/70 text-xs '>ANOS DE <br/> GESTÃO DE PROJETOS</p></li>
          </ul>

          <div className='text-neutral-400/70 text-xs text-right flex justify-end gap-2 mt-32'>
            <div>
              <h3>ENTRE EM CONTATO</h3>

              <p className='text-white'>andrelsbrito2022@gmail.com</p>
            </div>
            
            <Button size="sm" className='bg-secondary'> <MdOutlineMail size={24}/></Button>
          </div>

          <Separator
            className='bg-target w-[60%] absolute right-0 top-[99%] '
          />
        </div>
      </header>
  )
}