import { connectDB } from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const db = await connectDB()

    const user = await db
      .collection("User")
      .findOne({
        email: body.email,
      })

    // USER NOT FOUND
    if (!user) {

      return NextResponse.json({
        success: false,
        error: "User not found",
      })
    }

    // PASSWORD CHECK
    if (
      user.password !== body.password
    ) {

      return NextResponse.json({
        success: false,
        error: "Wrong Password",
      })
    }

    // SUCCESS
    return NextResponse.json({
      success: true,
      user,
    })

  } catch (error: any) {

    console.log(error)

    return NextResponse.json({
      success: false,
      error: "Server Error",
    })
  }
}