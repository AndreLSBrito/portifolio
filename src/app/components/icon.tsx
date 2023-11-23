import dynamic from 'next/dynamic'
import { LucideProps, icons } from 'lucide-react';

export interface IconProps extends LucideProps {
  iconName?: keyof typeof icons
}

function Icon({ iconName, ...props }: IconProps){
  const LucideIcon = iconName && dynamic(() =>
    import('lucide-react').then((mod) => mod[iconName])
  )

  if (!LucideIcon) return;

  return <LucideIcon {...props} />;
}

export default Icon
