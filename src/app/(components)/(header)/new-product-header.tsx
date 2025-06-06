import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NewProductHeader() {
  return (
    <header className="bg-white flex flex-col md:flex-row justify-between items-center md:px-1 py-2 shadow-header absolute left-0 right-0 top-0 ">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      <h1 className="text-lg font-semibold text-gray-800 md:text-xl">Adicionar novos produtos</h1>
      <nav>
        <Link href="/" className="hidden font-inter md:flex items-center text-2xl gap-1"><House width={20} height={20} /> Início</Link>
      </nav>
    </header>
  )
}
