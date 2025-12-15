"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (senha.length < 8) {
      alert("Senha deve ter no mínimo 8 caracteres");
      return;
    }

    router.push("/home");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="border-4 border-black rounded-2xl p-3 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Senha"
        className="border-4 border-black rounded-2xl p-3 focus:outline-none"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      <button className="bg-pink-400 hover:bg-pink-500 text-white rounded-2xl p-3 font-semibold transition-colors">
        Entrar
      </button>
    </form>
  );
}