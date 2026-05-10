// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function RegisterPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()

//   const handleRegister = async () => {
//     await fetch("/api/auth/register", {
//       method: "POST",
//       body: JSON.stringify({ email, password })
//     })

//     router.push("/login")
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl mb-4">Register</h1>

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
//         onClick={handleRegister}
//         className="bg-black text-white px-4 py-2"
//       >
//         Register
//       </button>
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {

    // GET OLD USERS
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    )

    // CHECK EXISTING USER
    const existingUser = users.find(
      (u: any) => u.email === email
    )

    if (existingUser) {

      alert("User already exists")

      return
    }

    // NEW USER
    const newUser = {
      name,
      email,
      password,
      role: "user",
    }

    // SAVE USER
    users.push(newUser)

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    )

    await fetch("/api/users", {

  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(newUser),
})

    alert("Registered Successfully ✅")

    router.push("/login")
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-6 outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold"
        >
          Register
        </button>

      </div>

    </div>
  )
}