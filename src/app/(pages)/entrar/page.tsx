"use client"
import { Eye, EyeOff } from "lucide-react";
import { redirect } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const inputRef = useRef(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    })

    if (res.ok) {
      toast.success("Login realizado com sucesso!")
      redirect("/admin/painel-admin")
    } else {
      console.log("Usuário ou senha inválidos")
    }
  }

  useEffect(() => {
    const logoutFlag = sessionStorage.getItem("logout")

    if (logoutFlag) {
      toast.success("Você saiu da conta.")
      sessionStorage.removeItem("logout")
    }
  }, [])


  return (
    <section className="bg-main min-h-screen flex flex-col justify-center items-center p-4 md:p-0">
      <div className="bg-white px-6 py-6 font-inter w-full max-w-md rounded-lg shadow-lg flex flex-col justify-center">
        <h2 className="text-title text-2xl text-center">Acesso ao sistema</h2>

        <form
          onSubmit={e => handleSubmit(e)}
          className="flex flex-col gap-4 mt-4 md:mt-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-medium">Nome</label>
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              name="username"
              placeholder="Digite seu usuário"
              className="border border-gray-300 px-3 py-2 rounded-md focus:border-none focus:outline-none focus:outline-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium">Senha</label>
            <div className={`flex flex-row items-center border-2 rounded-md ${isFocused ? "border-cyan-400 " : "border-gray-300"}`}>
              <input
                type={showPassword ? "text" : "password"}
                ref={inputRef}
                name="password"
                placeholder="Digite sua senha"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-3 border-none outline-none active:outline-none active:border-none" />

              <button
                onClick={() => setShowPassword(prev => !prev)}
                className="outline-none pr-2"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>

          <div className="flex justify-end items-center gap-2">
            <label htmlFor="remiderPassword">Lembrar minha senha </label>
            <input type="checkbox" name="remiderPassword" id="remiderPassword" />
          </div>

          <button
            type="submit"
            // onSubmit={(e) => e.preventDefault()}
            className="bg-button h-12 w-full text-white font-medium rounded-md hover:opacity-80 active:opacity-80"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
