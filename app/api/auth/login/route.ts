import { connectDB } from "@/lib/mongodb"

export async function POST(req: Request) {
  const body = await req.json()

  const db = await connectDB()

  const user = await db.collection("User").findOne({
    email: body.email,
    password: body.password
  })

  if (!user) {
    return Response.json({ error: "Invalid credentials" })
  }

  return Response.json({ success: true, user })
}