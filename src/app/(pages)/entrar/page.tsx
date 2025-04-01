"use client"
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import bcrypt from "bcryptjs";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    async function generateHash() {
      try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync("B4c0/\/", salt)

        const cleanHash = hash.replace(/[^a-zA-Z0-9]/g, "")
        console.log("hash gerado " + cleanHash)
      } catch (error) {
        console.log("Erro ao gerar o hash " + error)
      }
    }


    generateHash()
  }, [])

  return (
    <section className="bg-main min-h-screen flex flex-col justify-center items-center p-4 md:p-0">
      <div className="bg-white px-6 py-6 font-inter w-full max-w-md rounded-lg shadow-lg flex flex-col justify-center">
        <h2 className="text-title text-2xl text-center">Acesso ao sistema</h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 mt-4 md:mt-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="nome@empresa.com"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium">Senha</label>
            <div className={`flex flex-row items-center border-2 border-gray-300 ${isFocused ? "border-cyan-400" : "border-gray-300"}`}>
              <input
                type={showPassword ? "text" : "password"}
                ref={inputRef}
                name="password"
                placeholder="Digite sua senha"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full px-2 py-3 rounded-md outline-none  " />

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
            onSubmit={(e) => e.preventDefault()}
            className="bg-button h-12 w-full text-white font-medium rounded-md hover:opacity-80 focus:opacity-50 transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
