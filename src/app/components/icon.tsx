import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface IconProps extends LucideProps {
  iconName?: keyof typeof dynamicIconImports;
}

export function Icon({ iconName, ...props }: IconProps){
  const LucideIcon = iconName && dynamic(dynamicIconImports[iconName])

  if (!LucideIcon) return;

  return <LucideIcon {...props} />;
}