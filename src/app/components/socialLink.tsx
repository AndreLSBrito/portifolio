import Link from "next/link";
import { Icon, IconProps } from "./icon";

export interface SocialLinkProps extends IconProps {
  link: string;
}

export function SocialLink({name, link}: SocialLinkProps){
 
  return (
    <Link href={link}>
      <div className="flex items-center justify-center border rounded-full w-10 h-10 " >
        <Icon 
          name={name}
          strokeWidth={1}
          color="#E9ED30"
        />  
      </div>
    </Link>
  )
}