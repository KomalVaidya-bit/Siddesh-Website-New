"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleRegister = async () => {
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password })
    })

    router.push("/login")
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Register</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 block mb-2"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 block mb-2"
      />

      <button
        onClick={handleRegister}
        className="bg-black text-white px-4 py-2"
      >
        Register
      </button>
    </div>
  )
}