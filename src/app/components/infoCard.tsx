"use client"

import Image from 'next/image';
import Icon, { IconProps } from './icon';

export interface infoCardDataType extends IconProps {
  title?: string;
  description: string;
  image?: string;
  date?: string;
}

export function InfoCard({iconName, title, description, image, date}: infoCardDataType){
  return (
   <div className='flex justify-center items-center gap-4'>
    <figure className='w-auto h-auto'>
      {image ? 
        
        (<Image
          src={image}
          alt={`Imagem do projeto descrito, lançado em ${date}`}
          width={70}
          height={70}
          style={{objectFit: "contain"}}
        /> )
        
        : <Icon iconName={iconName} size={36} strokeWidth={1}/>
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