
import { PiMapPinLineThin } from "react-icons/pi";
import { infoCardDataType, newsData, socialLinks } from "../utils/data";
import { InfoCard } from "./infoCard";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SocialLink } from "./socialLink";

export async function Footer(){
  const contactData: infoCardDataType[] = [
    {
      icon: <PiMapPinLineThin size={36}/>,
      title: 'Localização',
      description: 'Brasil, Minas Gerais, Arcos'
    },
    {
      icon: <TfiEmail size={36}/>,
      title: 'Email',
      description: 'andrelsbrito2022@gmail.com'
    },
    {
      icon: <MdOutlinePhoneInTalk size={36}/>,
      title: 'WhatsApp',
      description: '+55 37 99127-7762'
    },
  ]

  return (
    <footer className="flex flex-col gap-12">
      <div className="flex flex-col gap-8 items-start">
        <h2 className="text-lg">Contato</h2>

        {contactData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8 items-start">
        <h2 className="text-lg">Novidades</h2>

        {newsData.map((card, index) => (
          <InfoCard
            key={index}
            image={card.image}
            description={card.description}
            date={card.date}
          />
        ))}
      </div>

      <div>
        <h3>ME SIGA</h3>

        <div className="flex gap-4 mt-10 justify-center">
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              link={social.link}
              name={social.name}
            />
          ))}
        
        </div>

        <p className="text-xs text-neutral-400 tracking-[3px] my-8 text-center">© ANDRÉ LUÍS 2023</p>

      </div>
    </footer>
  )
}