import Link from "next/link";
import { Icon, IconProps } from "./icon";

export interface SocialLinkProps extends IconProps {
  link: string;
}

export function SocialLink({iconName, link}: SocialLinkProps){
 
  return (
    <Link href={link}>
      <div className="flex items-center justify-center border rounded-full w-10 h-10 " >
        <Icon 
          iconName={iconName}
          strokeWidth={1}
          color="#E9ED30"
        />  
      </div>
    </Link>
  )
}