import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <header className="w-screen md:w-auto h-auto flex flex-col justify-center flex-wrap md:justify-between md:pl-8 md:pr-8 md:pt-1 lg:justify-between shadow-header font-sans lg:flex-row content-center fixed top-0 left-0 right-0 z-[1] bg-white"> <img src={Logo} alt="Logo" width={300} />
      <div className="flex flex-col items-center md:items-end  md:self-center  pt-2 text-link-normal">
        {/* <a href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!" target="_blank" className="text-2xl hover:opacity-70 active:opacity-60">FONE: (77) 999827672</a> */}
        <a href="https://wa.me/5577999827672?text=Ol%C3%A1%2C%20climatize!" target="_blank" className="text-2xl hover:opacity-70 active:opacity-60">FONE: (xx) xxxxxxxxx</a>
        <nav className="hidden lg:flex">
          <ul className="flex gap-12 text-3xl  ">
            <li><a href="#" className="text-link-clicked underline hover:opacity-70 active:opacity-60" target="_blank">Início</a></li>
            <li><a href="#" className="hover:opacity-70 active:opacity-60" target="_blank">Produtos</a></li>
            <li><a href="#" className="hover:opacity-70 active:opacity-60" target="_blank">Serviços</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
