import { connectDB } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

// GET PRODUCTS
export async function GET() {
  const db = await connectDB()
  const products = await db.collection("Product").find().toArray()
  return Response.json(products)
}

// ADD PRODUCT
export async function POST(req: Request) {
  const body = await req.json()

  const db = await connectDB()

  await db.collection("Product").insertOne({
    name: body.name,
    price: body.price,
    description: body.description,
    stock: body.stock || 10
  })

  return Response.json({ success: true })
}

// DELETE PRODUCT
export async function DELETE(req: Request) {
  const { id } = await req.json()

  const db = await connectDB()

  await db.collection("Product").deleteOne({
    _id: new ObjectId(id)
  })

  return Response.json({ success: true })
}

export async function PUT(req: Request) {
  const body = await req.json()

  const db = await connectDB()
  const { ObjectId } = require("mongodb")

  await db.collection("Product").updateOne(
    { _id: new ObjectId(body.id) },
    {
      $set: {
        name: body.name,
        price: body.price,
        description: body.description
      }
    }
  )

  return Response.json({ success: true })
}