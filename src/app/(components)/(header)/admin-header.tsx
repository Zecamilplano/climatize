import { ChevronDown, House, LogOutIcon, SquareUser, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const users = [
  { user: "eze", image: "/img-eze.jpeg" },
  { user: "Aliomar", image: "/img-aliomar.jpeg" }
]

export function AdminHeader() {
  const [isOpenOption, setOpenOption] = useState(false)
  const [userCode, setUserCode] = useState<string | null>(null);

  useEffect(() => {
    const match = document.cookie.match(/user=([^;]+)/)
    if (match) {
      setUserCode(decodeURIComponent(match[1]))
    }
  }, [])

  const user = users.find(u => u.user === userCode)

  async function logout() {
    await fetch("/api/logout", { method: "POST" })
    redirect("/entrar")
  }

  return (
    <header className="bg-white flex flex-col md:flex-row justify-between items-center  py-2 shadow-header w-[97vw] ">
      <Image src="/logo.png" width={200} height={200} alt="Logo" /> <nav> <Link href="/" className="hidden font-inter md:flex items-center text-2xl gap-1"><House width={20} height={20} /> Início</Link>
      </nav>

      <div
        onClick={() => setOpenOption(prev => !prev)}
        className="flex items-center gap-2 hover:cursor-pointer"
      >
        <div className="h-10 w-10 relative">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.user}
              fill
              className="rounded-full object-cover" />
          ) : (
            <User
              height={20}
              width={24}
              className="rounded-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-sm  font-medium text-gray-900">Ezequiel</p>
          <p className="text-xs text-gray-500">Administrador</p>
        </div>

        <ChevronDown className="text-gray-400" />
        {isOpenOption && (
          <button>
            <div className="h-10 w-[180px] bg-white shadow-lg absolute top-20 right-5 z-10 flex items-center pl-1.5 active:cursor-pointer">
              <p
                onClick={logout}
                className="flex flex-row w-full py-2"
              >
                <LogOutIcon color="red" />Sair
              </p>
            </div>

          </button>
        )}
      </div>
    </header>
  )
}
