import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <header className="flex flex-row justify-between pl-8 pr-8 pt-1 shadow-header font-sans">
      <img src={Logo} alt="Logo" width={300} />

      <div className="flex flex-col items-end pt-2 text-link-normal">
        <a href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!" className="text-2xl hover:opacity-70 active:opacity-60">FONE: (77) 999827672</a>
        <nav>
          <ul className="flex gap-12 text-3xl  ">
            <li><a href="#" className="text-link-clicked underline hover:opacity-70 active:opacity-60">Início</a></li>
            <li><a href="#" className="hover:opacity-70 active:opacity-60">Produtos</a></li>
            <li><a href="#" className="hover:opacity-70 active:opacity-60">Serviços</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
