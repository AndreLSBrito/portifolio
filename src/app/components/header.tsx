import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { NavBar } from "./navBar";
import { Gradient } from "./gradient";

export function Header() {
  return(
    <header className='flex flex-col items-start justify-between w-full lg:h-[100vh] py-0 px-20 z-10'>
        <NavBar />

        <div className='flex flex-wrap w-full gap-20 items-center justify-start'>
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

          <h1 className='max-w-[750px] text-white text-3xl'> 
            Olá, Meu nome é André Luís. Sou desenvolvedor. Ajudo você a criar 

            <span className='bg-clip-text text-transparent bg-target text-3xl'> Web sites</span>

            <span className='animate-pulse2 text-3xl'>|</span> 
          </h1>
        </div>

        <div className='flex md:flex-col w-full text-white mb-10'>
          <Separator
            className='bg-target w-[60%] absolute left-0 lg:invisible'
          />

          <ul className='gap-10 flex flex-col lg:flex-row my-4 w-full'>
            <li className='flex text-4xl gap-4 items-center'>+10 
              <p className='text-neutral-400/70 text-xs '>ANOS DE <br/> PROJETOS TECH</p>
            </li>
            
            <li className='flex text-4xl gap-4 items-center'>+6 
              <p className='text-neutral-400/70 text-xs '>ANOS DE <br/> GESTÃO DE PROJETOS</p>
            </li>

            <li className='text-neutral-400/70 self-end text-xs text-right flex-1 flex justify-end gap-2'>
              <div>
                <h3>ENTRE EM CONTATO</h3>

                <p className='text-white'>andrelsbrito2022@gmail.com</p>
              </div>
              
              <Button size="sm" className='bg-secondary'> 
                <Gradient />

                <MdOutlineMail 
                  size={24}
                  style={{fill: "url(#gradient"}}  
                />
              </Button>
            </li>
          </ul>

          <Separator
            className='bg-target w-[60%] absolute right-0 bottom-0 lg:left-0'
          />
        </div>
      </header>
  )
}