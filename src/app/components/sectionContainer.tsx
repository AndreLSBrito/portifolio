import { ReactNode, HTMLProps } from "react"

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
  title: string;
  subTitle: string;
  slogan?: string;
  children?: ReactNode;
}

export function SectionContainer({title, subTitle, slogan, children, className, ...props}: SectionContainerProps){
  return (
    <section className={`w-full flex flex-col items-center text-center mt-20 gap-4 ${className}`} {...props}>
      <h4 className="font-light text-base uppercase lg:text-lg tracking-[7px]">{title}</h4>
  
      <h2 className="font-medium max-w-4xl text-3xl lg:text-5xl bg-clip-text text-transparent bg-target ">{subTitle}</h2>

      {slogan && <h3 className='text-neutral-400 max-w-2xl text-sm mb-20'>{slogan}</h3>}

      {children}
    </section>
  )
}