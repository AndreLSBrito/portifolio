import Link from "next/link";
import Icon, { IconProps } from "./icon";
import { Gradient } from "./gradient";

export interface SocialLinkProps extends IconProps {
  link: string;
}

export function SocialLink({iconName, link}: SocialLinkProps){
 
  return (
    <>
    <Gradient />
    
    <Link href={link} target="_blank">
      <div className="flex items-center justify-center border rounded-full w-10 h-10 " >
        <Icon 
          iconName={iconName}
          strokeWidth={1}
          style={{stroke: "url(#gradient"}}  
        />  
      </div>
    </Link>
    </>
  )
}