"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 gap-8 px-4">

      <h1 className="text-4xl text-pink-800 font-bold font-[cursive] text-center">
  Bem-vinda ao Clube das Meninas
</h1>


      <button
        onClick={handleLogout}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl p-3 font-semibold"
      >
        Logout
      </button>
    </main>
  );
}
