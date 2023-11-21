import Image from "next/image"

interface SkillCardProps {
  name: string;
  image: string
}

export function SkillCard({name, image}: SkillCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-secondary rounded-md px-4 py-8 mt-4 w-full h-full">
      <Image
         src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${image}`}
        alt={name}
        width={40}
        height={40}
      />
      
      <p>{name}</p>
    </div>
  )
}