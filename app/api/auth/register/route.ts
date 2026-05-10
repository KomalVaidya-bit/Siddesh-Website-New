// import { connectDB } from "@/lib/mongodb"

// export async function POST(req: Request) {
//   const body = await req.json()

//   const db = await connectDB()

//   const existing = await db.collection("User").findOne({
//     email: body.email
//   })

//   if (existing) {
//     return Response.json({ error: "User already exists" })
//   }

//   await db.collection("User").insertOne(body)

//   return Response.json({ success: true })
// }


import { NextResponse } from "next/server"

let users: any[] = []

export async function POST(req: Request) {

  const body = await req.json()

  const { name, email, password } = body

  // CHECK EXISTING USER
  const existingUser = users.find(
    (u) => u.email === email
  )

  if (existingUser) {
    return NextResponse.json({
      success: false,
      message: "User already exists",
    })
  }

  // SAVE USER
  users.push({
    name,
    email,
    password,
    role: "user",
  })

  return NextResponse.json({
    success: true,
  })
}