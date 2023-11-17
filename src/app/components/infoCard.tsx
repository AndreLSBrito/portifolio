"use client"

import Image from 'next/image';
import { IconType } from 'react-icons'
import { ReactNode } from 'react'

interface InfoCardProps {
  icon?: any;
  title?: string;
  description: string;
  image?: string;
  date?: string;
}

export function InfoCard({icon, title, description, image, date}: InfoCardProps){
  return (
   <div className='flex justify-center items-center gap-4'>
    <figure>
      {image ? 
        
        (<Image
          src={image}
          alt={`Imagem do projeto descrito, lançado em ${date}`}
          width={70}
          height={70}
        /> )
        
        : icon
      }
    </figure>

    <div>
      {title && <h3 className='font-bold'>{title}</h3>}
      <p className='text-neutral-400'>{description}</p>
      {date && <p className='bg-clip-text text-transparent bg-target text-xs'>{date}</p>}
    </div>
   </div>
  )
}