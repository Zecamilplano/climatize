import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeaderReview() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center md:mx-2 py-2 shadow-header">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      <Link href="/" className="hidden font-inter md:flex items-center text-2xl gap-1"><House width={20} height={20} /> Início</Link>
    </header>
  )
}
