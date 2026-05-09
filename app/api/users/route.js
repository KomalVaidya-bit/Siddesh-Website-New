import { connectDB } from "@/lib/mongodb"

export async function GET() {

  const db = await connectDB()

  const users = await db
    .collection("User")
    .find({})
    .toArray()

  return Response.json(users)
}