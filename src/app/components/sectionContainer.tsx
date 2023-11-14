import { ReactNode, HTMLProps } from "react"

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
  title: string;
  subTitle: string;
  children: ReactNode
}

export function SectionContainer({title, subTitle, children, className, ...props}: SectionContainerProps){
  return (
    <section className={`${className} px-16 flex flex-col items-center text-center`} {...props}>
      <h4 className="font-light text-base uppercase mb-3 tracking-[7px]">{title}</h4>
  
      <h2 className="font-medium text-3xl bg-clip-text text-transparent bg-target mb-20">{subTitle}</h2>

      {children}
    </section>
  )
}