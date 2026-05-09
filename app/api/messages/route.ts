import { connectDB } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

// =========================
// GET ALL MESSAGES
// =========================

export async function GET() {

  const db = await connectDB()

  const messages = await db
    .collection("Message")
    .find({})
    .toArray()

  return Response.json(messages)
}

// =========================
// CREATE MESSAGE
// =========================

export async function POST(
  req: Request
) {

  const body = await req.json()

  const db = await connectDB()

  await db.collection("Message").insertOne({

    name: body.name,

    email: body.email,

    subject: body.subject,

    message: body.message,

    createdAt: new Date(),

  })

  return Response.json({
    success: true,
  })
}

// =========================
// DELETE MESSAGE
// =========================

export async function DELETE(
  req: Request
) {

  const body = await req.json()

  const db = await connectDB()

  await db
    .collection("Message")
    .deleteOne({
      _id: new ObjectId(body.id),
    })

  return Response.json({
    success: true,
  })
}