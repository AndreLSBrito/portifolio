'use client'
import { CiMobile4 } from "react-icons/ci"; 

export function ServiceCard(){
  return (
    <div className="flex gap-4 bg-secondary rounded-md px-4 py-8 mt-4">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#AD6B09" offset="0%" />
          <stop stopColor="#E95656" offset="40%" />
          <stop stopColor="#E9ED30" offset="100%" />
        </linearGradient>
      </svg>
      
      <div className="self-center">
        <CiMobile4 
          size={50}
          style={{fill: "url(#blue-gradient"}}
        />
      </div>
      
      <div className="flex flex-col gap-4 text-left">
        <h6 className="text-white">Soluções de Aplicativos Móveis Personalizadas</h6>

        <p className="text-neutral-400">Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.</p>
      </div>
    </div>
  )
}