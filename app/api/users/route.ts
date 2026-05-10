// import { connectDB } from "@/lib/mongodb"

// export async function GET() {

//   const db = await connectDB()

//   const users = await db
//     .collection("User")
//     .find({})
//     .toArray()

//   return Response.json(users)
// }

import { connectDB } from "@/lib/mongodb"

export async function GET() {

  const db = await connectDB()

  const users = await db
    .collection("User")
    .find({})
    .toArray()

  return Response.json(users)
}

// ADD USER
export async function POST(req) {
  const body = await req.json()

  const db = await connectDB()

  // CHECK EXISTING USER
  const existingUser = await db
    .collection("User")
    .findOne({
      email: body.email,
    })

  if (existingUser) {

    return Response.json({
      success: false,
      message: "User already exists",
    })
  }

  // INSERT USER
  await db.collection("User").insertOne({
    name: body.name,
    email: body.email,
    password: body.password,
    role: "user",
  })

  return Response.json({
    success: true,
  })
}