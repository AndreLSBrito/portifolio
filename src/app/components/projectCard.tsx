import Image from "next/image";
import { projectType } from "../utils/data";

export function ProjectCard({name, description, image, repo, tags, url, stack}: projectType){
  return (
    <a href={url} target="_blank">
      <div className="h-full flex flex-col overflow-hidden relative rounded-lg justify-start items-center gap-6 w-[400px] bg-secondary px-4 py-8 mt-4 hover:duration-500 hover:scale-105 transition-all ease-in-out duration-500">
        <div className="absolute text-xs left-[80%] top-3 bg-target text-primary p-1 rounded-full">{stack}</div>
        
        <h3>{name}</h3>
        
        <p className="text-neutral-400 text-xs">{description}</p>

        <Image
          src={image}
          alt={name}
          width={200}
          height={300}
          className="w-auto rounded-sm h-auto"
          style={{objectFit: "contain"}}
        />

        <div className=" gap-2 flex-wrap text-xs flex mt-6 justify-start items-start">
          {
            tags.map((tag,index) => (
              <div 
                key={index}
                className="bg-secondary flex rounded-md p-2"
              >
                {tag}
              </div>
            ))
          }
        </div>
      </div>
    </a>
  )
}