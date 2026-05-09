import { connectDB } from "@/lib/mongodb"

export async function POST(req: Request) {
  const body = await req.json()

  const db = await connectDB()

  await db.collection("Order").insertOne({
    name: body.name,
    price: body.price,
    user: body.user,
    createdAt: new Date()
  })

  return Response.json({ success: true })
}