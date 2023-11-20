'use client'
import { CiMobile4 } from "react-icons/ci"; 
import { Gradient } from "./gradient";
import { Icon, IconProps } from "./icon";

export interface ServiceCardProps extends IconProps {
  service: string;
  description: string
}

export function ServiceCard({ iconName, service, description }: ServiceCardProps){
  return (
    <div className="flex gap-4 bg-secondary rounded-md px-4 py-8 w-full">
      <Gradient/>
      
      <div className="self-center">
      <Icon 
          iconName={iconName}
          strokeWidth={1}
          style={{stroke: "url(#gradient"}}
          size={50}  
        />  
      </div>
      
      <div className="flex flex-col gap-4 text-left">
        <h6 className="text-white">{service}</h6>

        <p className="text-neutral-400">{description}</p>
      </div>
    </div>
  )
}