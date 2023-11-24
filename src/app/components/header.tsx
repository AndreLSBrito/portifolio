import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { NavBar } from "./navBar";
import { Gradient } from "./gradient";
import { TextAnimation } from "./textAnimation";

export function Header() {
  
  return(
    <header className='flex flex-col items-center justify-between w-full h-screen py-0 px-5 z-10'>
      <NavBar />

      <div className='flex flex-1 flex-col md:flex-row w-full gap-10 items-center justify-start'>
        <figure>
          <Image
            src="/profile.svg"
            alt='Foto de perfil'
            width={250}
            height={250}
            style={{objectFit: "contain"}}
            className="md:w-auto md:h-auto"
          />
        </figure>

        <h1 className='max-w-[750px] text-white text-xl md:text-3xl text-center'> 
          Olá, Meu nome é André Luís. Sou desenvolvedor. Ajudo você a criar 

          <TextAnimation words={['web site.', 'landing page.', 'aplicações web.', 'aplicativos móveis.']}/>

          <span className='animate-pulse2 text-xl md:text-3xl'>|</span> 
        </h1>
      </div>

      <div className='flex md:flex-col w-full text-white absolute bottom-0 px-5'>
        <Separator className='bg-target w-[60%] absolute left-0 lg:invisible'/>
    
        <ul className='gap-5 md:gap-10 flex flex-col lg:flex-row my-4 w-full'>
          <li className='flex text-2xl md:text-4xl gap-4 items-center'>+3
            <p className='text-neutral-400/70 text-xs '>ANOS DE <br/> PROJETOS TECH</p>
          </li>
          
          <li className='flex text-2xl md:text-4xl gap-4 items-center'>+50 
            <p className='text-neutral-400/70 text-xs '>PROJETOS <br/> REALIZADOS</p>
          </li>

          <li className='text-neutral-400/70 text-xs text-right flex-1 justify-end flex gap-2'>
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