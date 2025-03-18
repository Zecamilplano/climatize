import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductHeader() {
  return (
    <header className="bg-white flex flex-col md:flex-row justify-between items-center md:px-1 py-2 shadow-header">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      <nav>
        <Link href="/" className="hidden font-inter md:flex items-center text-2xl gap-1"><House width={20} height={20} /> Início</Link>
      </nav>
    </header>
  )
}
