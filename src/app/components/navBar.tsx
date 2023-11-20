'use client'

import { LuAlignJustify } from 'react-icons/lu'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function NavBar(){
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="flex w-full justify-between py-4 items-center relative ">
      <div className="text-center">
        <span className="text-lg text-neutral-400 tracking-[7px]">ANDRÉ LUÍS</span>
        <p className="text-base bg-clip-text text-transparent bg-target">desenvolvedor</p>
      </div>

        <Button 
          onClick={() => setNavOpen(!navOpen)}
          className='lg:hidden flex-col bg-secondary hover:bg-secondary/30'  
        >
          <LuAlignJustify
            color="white"
            size="2rem"
          />

          {navOpen && (
            <div className='w-full absolute z-20 bg-indigo-950 flex top-0 left-0 mt-20 justify-center'>
              <ul className="flex-col text-white">
                <li className='mt-2'><a href="#home">Home</a></li>
                <li className='mt-2'><a href="#sobre">Sobre</a></li>
                <li className='mt-2'><a href="#projetos">Projetos</a></li>
                <li className='mt-2'><a href="#contatos">Contatos</a></li>
              </ul>
            </div>
          )}
        </Button>

        <ul className="hidden lg:flex gap-16 ">
          <li className='mt-2 text-white hover:bg-clip-text hover:text-transparent hover:bg-target'><a href="#home">Home</a></li>
          <li className='mt-2 text-white hover:bg-clip-text hover:text-transparent hover:bg-target'><a href="#sobre">Sobre</a></li>
          <li className='mt-2 text-white hover:bg-clip-text hover:text-transparent hover:bg-target'><a href="#projetos">Projetos</a></li>
          <li className='mt-2 text-white hover:bg-clip-text hover:text-transparent hover:bg-target'><a href="#contatos">Contatos</a></li>
        </ul>
      
    </nav>
  )
}