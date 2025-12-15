'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  function handleLogout() {
    router.push('/')
  }

  return (
    <div className="bg-white p-6 rounded shadow w-80 text-center">
      <h2 className="text-lg font-bold mb-2">
        Bem-vinda ao Clube das Meninas 💗
      </h2>

      <p className="mb-4">
        Login realizado com sucesso.
      </p>

      <button
        onClick={handleLogout}
        className="bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-500 transition"
      >
        Logout
      </button>
    </div>
  )
}