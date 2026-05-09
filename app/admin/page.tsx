"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  const [products, setProducts] = useState<any[]>([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [editId, setEditId] = useState<string | null>(null)

  // 🔐 Protect Admin Page
  useEffect(() => {
    const user = localStorage.getItem("user")

    // if (!user) {
    //   alert("Please login first")
    //   router.push("/login")
    // }
  }, [])

  // 📦 Fetch products
  const fetchProducts = async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // ➕ Add or Update Product
  const handleAdd = async () => {
    if (!name || !price) {
      alert("Enter all fields")
      return
    }

    if (editId) {
      // UPDATE
      await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editId,
          name,
          price,
          description,
        }),
      })

      alert("Product Updated ✅")
      setEditId(null)
    } else {
      // ADD
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          description,
        }),
      })

      alert("Product Added ✅")
    }

    setName("")
    setPrice("")
    setDescription("")
    fetchProducts()
  }

  // ❌ Delete
  const handleDelete = async (id: string) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    alert("Deleted ✅")
    fetchProducts()
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Add / Edit Product */}
      <div className="mb-6">
        <h2 className="text-xl mb-2">
          {editId ? "Edit Product" : "Add Product"}
        </h2>

        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 block mb-2 text-black bg-white w-64"
        />

        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 block mb-2 text-black bg-white w-64"
        />

        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 block mb-2 text-black bg-white w-64"
        />

        <button
          onClick={handleAdd}
          className="bg-black text-white px-4 py-2"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* Product List */}
      <h2 className="text-xl mb-2">All Products</h2>

      {products.map((p: any) => (
        <div key={p._id} className="border p-3 mb-2 w-64">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button
            onClick={() => handleDelete(p._id)}
            className="bg-red-500 text-white px-2 py-1 mt-2"
          >
            Delete
          </button>

          <button
            onClick={() => {
              setName(p.name)
              setPrice(p.price)
              setDescription(p.description)
              setEditId(p._id)
            }}
            className="bg-blue-500 text-white px-2 py-1 mt-2 ml-2"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}