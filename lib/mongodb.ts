import { MongoClient } from "mongodb"

const uri = process.env.DATABASE_URL!
const client = new MongoClient(uri)

let db: any

export async function connectDB() {
  if (!db) {
    await client.connect()
    db = client.db("mydb")
  }
  return db
}