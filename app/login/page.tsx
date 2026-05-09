"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user))
      router.push("/our-products")
    } else {
      alert(data.error)
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login</h1>

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
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  )
}