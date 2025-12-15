'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !senha) {
      alert('Preencha todos os campos')
      return
    }

    if (senha.length < 8) {
      alert('A senha deve ter no mínimo 8 caracteres')
      return
    }

    router.push('/home')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4"
    >
      <h1 className="text-xl font-bold text-center">
        Clube das Meninas
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="border border-black p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="border border-black p-2 rounded"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button
        type="submit"
        className="bg-pink-400 text-white py-2 rounded hover:bg-pink-500 transition"
      >
        Entrar
      </button>
    </form>
  )
}
