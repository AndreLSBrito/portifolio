'use client'
import { CiMobile4 } from "react-icons/ci"; 
import { Gradient } from "./gradient";

export function ServiceCard(){
  return (
    <div className="flex gap-4 bg-secondary rounded-md px-4 py-8 mt-4">
      <Gradient/>
      
      <div className="self-center">
        <CiMobile4 
          size={50}
          style={{fill: "url(#gradient"}}
        />
      </div>
      
      <div className="flex flex-col gap-4 text-left">
        <h6 className="text-white">Soluções de Aplicativos Móveis Personalizadas</h6>

        <p className="text-neutral-400">Quero ajudar a transformar suas ideias em aplicativos móveis de sucesso.</p>
      </div>
    </div>
  )
}