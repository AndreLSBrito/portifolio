export function NavBar(){
  return (
    <nav className="flex w-full justify-between py-4 items-center">
      <div className="text-center">
        <span className="text-3xl text-neutral-400 text">ANDRÉ LUÍS</span>
        <p className="text-base bg-clip-text text-transparent bg-target">desenvolvedor</p>
      </div>

      
      <ul className="flex gap-8 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
     
    </nav>
  )
}