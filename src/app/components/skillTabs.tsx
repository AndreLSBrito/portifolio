'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillCard } from "./skillCard"
import { AreaType, skillsData } from "../utils/data"
import {useState} from 'react'


export function SkillTabs(){
  const [skill, setSkill] = useState<AreaType | 'all'>("all")

  const skillsSelected = (skill === 'all') 
    ? skillsData 
    : skillsData.filter((skillSelected) => ( skillSelected.area.includes(skill)))

  return (
    <Tabs defaultValue="TODAS" className=" w-full">
      <TabsList className="bg-primary flex justify-start flex-wrap mb-5">
        <TabsTrigger className="hover:bg-clip-text hover:text-transparent hover:bg-target"  value="TODAS" onClick={()=> setSkill('all')}>TODAS</TabsTrigger>
        <TabsTrigger className="hover:bg-clip-text hover:text-transparent hover:bg-target" value="DESIGN" onClick={()=> setSkill('design')}>DESIGN</TabsTrigger>
        <TabsTrigger className="hover:bg-clip-text hover:text-transparent hover:bg-target" value="FRONT-END" onClick={()=> setSkill('front')}>FRONT-END</TabsTrigger>
        <TabsTrigger className="hover:bg-clip-text hover:text-transparent hover:bg-target" value="BACK-END" onClick={()=> setSkill('back')}>BACK-END</TabsTrigger>
        <TabsTrigger  className="hover:bg-clip-text hover:text-transparent hover:bg-target"value="DADOS" onClick={()=> setSkill('data')}>DADOS</TabsTrigger>
      </TabsList>
      <TabsContent value="TODAS" className="grid grid-cols-auto-fit gap-5">
        {skillsSelected.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            image={skill.image}
          />
        ))} 
      </TabsContent>

      <TabsContent value="DESIGN" className="grid grid-cols-auto-fit gap-5">
        {skillsSelected.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              image={skill.image}
            />
          ))}
      </TabsContent>

      <TabsContent value="FRONT-END" className="grid grid-cols-auto-fit gap-5">
        {skillsSelected.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </TabsContent>

      <TabsContent value="BACK-END" className="grid grid-cols-auto-fit gap-5">
        {skillsSelected.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </TabsContent>

      <TabsContent value="DADOS" className="grid grid-cols-auto-fit gap-5">
        {skillsSelected.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </TabsContent>
    </Tabs>
  )
}