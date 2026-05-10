// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()

//   const handleLogin = async () => {
//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password })
//     })

//     const data = await res.json()

//     if (data.success) {
//       localStorage.setItem("user", JSON.stringify(data.user))
//       router.push("/our-products")
//     } else {
//       alert(data.error)
//     }
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl mb-4">Login</h1>

//       <input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 block mb-2"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         className="border p-2 block mb-2"
//       />

//       <button
//         onClick={handleLogin}
//         className="bg-black text-white px-4 py-2"
//       >
//         Login
//       </button>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!data.success) {
        alert("Invalid Credentials")
        return
      }

      localStorage.setItem("user", JSON.stringify(data.user))

      if (data.user?.email === "admin@gmail.com") {
        router.push("/admin")
        return
      }

      router.push("/our-products")
    } catch (err) {
      console.error(err)
      alert("Login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  )
}