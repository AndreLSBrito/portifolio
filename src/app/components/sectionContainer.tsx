import { ReactNode, HTMLProps } from "react"

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
  title: string;
  subTitle: string;
  slogan?: string;
  children?: ReactNode;
}

export function SectionContainer({title, subTitle, slogan, children, className, ...props}: SectionContainerProps){
  return (
    <section className={` px-16 flex flex-col items-center text-center mt-20 gap-4 ${className}`} {...props}>
      <h4 className="font-light text-base uppercase  tracking-[7px]">{title}</h4>
  
      <h2 className="font-medium text-3xl bg-clip-text text-transparent bg-target ">{subTitle}</h2>

      {slogan && <h3 className='text-neutral-400 text-sm mb-20'>{slogan}</h3>}

      {children}
    </section>
  )
}