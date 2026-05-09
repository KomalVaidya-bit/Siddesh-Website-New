// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import {
//   Package,
//   IndianRupee,
//   Pencil,
//   Trash2,
//   Plus,
//   LayoutDashboard,
// } from "lucide-react"

// export default function AdminPage() {
//   const router = useRouter()

//   const [products, setProducts] = useState<any[]>([])
//   const [name, setName] = useState("")
//   const [price, setPrice] = useState("")
//   const [description, setDescription] = useState("")
//   const [editId, setEditId] = useState<string | null>(null)
  

//   // 🔐 Protect Admin Page
//   useEffect(() => {
//     const user = localStorage.getItem("user")

//     // if (!user) {
//     //   alert("Please login first")
//     //   router.push("/login")
//     // }
//   }, [])

//   // 📦 Fetch Products
//   const fetchProducts = async () => {
//     const res = await fetch("/api/products")
//     const data = await res.json()
//     setProducts(data)
//   }

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   // ➕ Add / Update
//   const handleAdd = async () => {
//     if (!name || !price) {
//       alert("Enter all fields")
//       return
//     }

//     if (editId) {
//       await fetch("/api/products", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: editId,
//           name,
//           price,
//           description,
//         }),
//       })

//       alert("Product Updated ✅")
//       setEditId(null)
//     } else {
//       await fetch("/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           price,
//           description,
//         }),
//       })

//       alert("Product Added ✅")
//     }

//     setName("")
//     setPrice("")
//     setDescription("")
//     fetchProducts()
//   }

//   // ❌ Delete
//   const handleDelete = async (id: string) => {
//     await fetch("/api/products", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     })

//     alert("Deleted ✅")
//     fetchProducts()
//   }

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white flex">
//       {/* Sidebar */}
//       <aside className="w-[260px] bg-[#111827] border-r border-white/10 p-6 hidden md:block">
//         <div className="flex items-center gap-3 mb-10">
//           <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-3 rounded-xl">
//             <LayoutDashboard size={22} />
//           </div>

//           <div>
//             <h1 className="text-xl font-bold">Admin Panel</h1>
//             <p className="text-sm text-gray-400">
//               Store Management
//             </p>
//           </div>
//         </div>

//         <div className="space-y-3">
//           <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-white/20 transition">
//             <Package size={20} />
//             <span>Products</span>
//           </div>

//           <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-white/10 transition">
//             <IndianRupee size={20} />
//             <span>Revenue</span>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 md:p-10 overflow-hidden">
//         {/* Top Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-5">
//           <div>
//             <h1 className="text-4xl font-bold">
//               Dashboard
//             </h1>

//             <p className="text-gray-400 mt-2">
//               Manage your products professionally
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-4 rounded-2xl shadow-2xl">
//             <p className="text-sm text-white/80">
//               Total Products
//             </p>

//             <h2 className="text-3xl font-bold">
//               {products.length}
//             </h2>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400">
//                   Total Products
//                 </p>

//                 <h2 className="text-3xl font-bold mt-2">
//                   {products.length}
//                 </h2>
//               </div>

//               <div className="bg-violet-500/20 p-4 rounded-2xl">
//                 <Package className="text-violet-400" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400">
//                   Total Value
//                 </p>

//                 <h2 className="text-3xl font-bold mt-2">
//                   ₹
//                   {products.reduce(
//                     (acc, item) =>
//                       acc + Number(item.price),
//                     0
//                   )}
//                 </h2>
//               </div>

//               <div className="bg-green-500/20 p-4 rounded-2xl">
//                 <IndianRupee className="text-green-400" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400">
//                   Active Products
//                 </p>

//                 <h2 className="text-3xl font-bold mt-2">
//                   {products.length}
//                 </h2>
//               </div>

//               <div className="bg-pink-500/20 p-4 rounded-2xl">
//                 <Plus className="text-pink-400" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add Product Form */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-10 shadow-2xl">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="bg-indigo-500/20 p-3 rounded-2xl">
//               <Plus className="text-indigo-400" />
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold">
//                 {editId
//                   ? "Edit Product"
//                   : "Add Product"}
//               </h2>

//               <p className="text-gray-400 text-sm">
//                 Fill product details below
//               </p>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-5">
//             <input
//               value={name}
//               placeholder="Product Name"
//               onChange={(e) => setName(e.target.value)}
//               className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
//             />

//             <input
//               value={price}
//               placeholder="Product Price"
//               onChange={(e) => setPrice(e.target.value)}
//               className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
//             />

//             <input
//               value={description}
//               placeholder="Product Description"
//               onChange={(e) =>
//                 setDescription(e.target.value)
//               }
//               className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition"
//             />
//           </div>

//           <button
//             onClick={handleAdd}
//             className="mt-6 bg-gradient-to-r from-violet-500 to-indigo-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-xl"
//           >
//             {editId
//               ? "Update Product"
//               : "Add Product"}
//           </button>
//         </div>

//         {/* Product List */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">
//               All Products
//             </h2>

//             <div className="text-sm text-gray-400">
//               {products.length} Products Found
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
//             {products.map((p: any) => (
//               <div
//                 key={p._id}
//                 className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-violet-500/40 hover:-translate-y-2 transition-all duration-300 shadow-xl"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">
//                       {p.name}
//                     </h3>

//                     <p className="text-gray-400 text-sm mb-5">
//                       {p.description ||
//                         "No description added"}
//                     </p>
//                   </div>

//                   <div className="bg-violet-500/10 p-3 rounded-2xl">
//                     <Package
//                       className="text-violet-400"
//                       size={20}
//                     />
//                   </div>
//                 </div>

//                 <div className="text-3xl font-bold mb-6">
//                   ₹{p.price}
//                 </div>

//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => {
//                       setName(p.name)
//                       setPrice(p.price)
//                       setDescription(p.description)
//                       setEditId(p._id)
//                     }}
//                     className="flex-1 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all py-3 rounded-2xl flex items-center justify-center gap-2"
//                   >
//                     <Pencil size={18} />
//                     Edit
//                   </button>

//                   <button
//                     onClick={() =>
//                       handleDelete(p._id)
//                     }
//                     className="flex-1 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition-all py-3 rounded-2xl flex items-center justify-center gap-2"
//                   >
//                     <Trash2 size={18} />
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  Package,
  IndianRupee,
  Pencil,
  Trash2,
  Plus,
  LayoutDashboard,
  Users,
  ShoppingCart,
  LogOut,
} from "lucide-react"

export default function AdminPage() {

  const router = useRouter()

  const [products, setProducts] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [editId, setEditId] =
    useState<string | null>(null)

  const [activeTab, setActiveTab] =
    useState("products")

  // =========================
  // AUTH
  // =========================

  useEffect(() => {

    const admin =
      localStorage.getItem("admin")

    if (!admin) {

      router.push("/admin/login")

    }

    fetchProducts()
    fetchUsers()
    fetchOrders()

  }, [])

  // =========================
  // FETCH PRODUCTS
  // =========================

  const fetchProducts = async () => {

    const res =
      await fetch("/api/products")

    const data = await res.json()

    setProducts(data)
  }

  // =========================
  // FETCH USERS
  // =========================

  const fetchUsers = async () => {

    const res =
      await fetch("/api/users")

    const data = await res.json()

    setUsers(data)
  }

  // =========================
  // FETCH ORDERS
  // =========================

  const fetchOrders = async () => {

    const res =
      await fetch("/api/orders")

    const data = await res.json()

    setOrders(data)
  }

  // =========================
  // ADD / UPDATE PRODUCT
  // =========================

  const handleAdd = async () => {

    if (!name || !price) {

      alert("Fill all fields")

      return
    }

    if (editId) {

      await fetch("/api/products", {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          id: editId,
          name,
          price,
          description,
        }),
      })

      alert("Updated ✅")

      setEditId(null)

    } else {

      await fetch("/api/products", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

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

  // =========================
  // DELETE PRODUCT
  // =========================

  const handleDelete = async (
    id: string
  ) => {

    await fetch("/api/products", {
      method: "DELETE",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({ id }),
    })

    fetchProducts()
  }

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("admin")

    router.push("/admin/login")
  }

  // =========================
  // TOTAL REVENUE
  // =========================

  const totalRevenue =
    orders.reduce(
      (acc: number, item: any) =>
        acc + Number(item.amount || 0),
      0
    )

  return (

    <div className="min-h-screen bg-[#0f172a] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-[#111827] border-r border-white/10 p-6 hidden md:flex flex-col">

        <div className="flex items-center gap-3 mb-10">

          <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-3 rounded-xl">

            <LayoutDashboard size={22} />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              Admin Panel
            </h1>

            <p className="text-sm text-gray-400">
              Store Management
            </p>

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="space-y-3 flex-1">

          {/* PRODUCTS */}
          <div
            onClick={() =>
              setActiveTab("products")
            }
            className={`p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition ${
              activeTab === "products"
                ? "bg-white/10"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >

            <Package size={20} />

            <span>
              Products
            </span>

          </div>

          {/* USERS */}
          <div
            onClick={() =>
              setActiveTab("users")
            }
            className={`p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition ${
              activeTab === "users"
                ? "bg-white/10"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >

            <Users size={20} />

            <div className="flex items-center justify-between w-full">

              <span>
                Users
              </span>

              <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">

                {users.length}

              </span>

            </div>

          </div>

          {/* REVENUE */}
          <div className="bg-white/5 p-4 rounded-2xl">

            <div className="flex items-center gap-3 mb-3">

              <IndianRupee size={20} />

              <span>
                Revenue
              </span>

            </div>

            <div className="text-sm text-gray-400 space-y-2">

              <p>
                Users: {users.length}
              </p>

              <p>
                Orders: {orders.length}
              </p>

              <p>
                Revenue: ₹{totalRevenue}
              </p>

            </div>

          </div>

        </div>

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold"
        >

          <LogOut size={18} />

          Logout

        </button>

      </aside>

      {/* MAIN */}

      <main className="flex-1 p-6 md:p-10 overflow-hidden">

        {/* TOP */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">

              Dashboard

            </h1>

            <p className="text-gray-400 mt-2">

              Manage products, users & revenue

            </p>

          </div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Products
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {products.length}
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Users
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {users.length}
            </h2>

          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl p-6">

            <p className="text-white/80">
              Revenue
            </p>

            <h2 className="text-4xl font-bold mt-3">
              ₹{totalRevenue}
            </h2>

          </div>

        </div>

        {/* PRODUCTS */}

        {activeTab === "products" && (

          <>

            {/* FORM */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

              <h2 className="text-2xl font-bold mb-6">

                {editId
                  ? "Edit Product"
                  : "Add Product"}

              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <input
                  value={name}
                  placeholder="Product Name"
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  value={price}
                  placeholder="Price"
                  onChange={(e) =>
                    setPrice(e.target.value)
                  }
                  className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  value={description}
                  placeholder="Description"
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <button
                onClick={handleAdd}
                className="mt-6 bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-4 rounded-2xl font-semibold"
              >

                {editId
                  ? "Update Product"
                  : "Add Product"}

              </button>

            </div>

            {/* PRODUCTS GRID */}

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {products.map((p: any) => (

                <div
                  key={p._id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >

                  <h3 className="text-2xl font-bold mb-2">

                    {p.name}

                  </h3>

                  <p className="text-gray-400 mb-5">

                    {p.description}

                  </p>

                  <div className="text-3xl font-bold mb-6">

                    ₹{p.price}

                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() => {

                        setName(p.name)

                        setPrice(p.price)

                        setDescription(
                          p.description
                        )

                        setEditId(p._id)
                      }}
                      className="flex-1 bg-blue-500/20 hover:bg-blue-500 py-3 rounded-2xl"
                    >

                      Edit

                    </button>

                    <button
                      onClick={() =>
                        handleDelete(p._id)
                      }
                      className="flex-1 bg-red-500/20 hover:bg-red-500 py-3 rounded-2xl"
                    >

                      Delete

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

        {/* USERS */}

        {activeTab === "users" && (

          <div className="space-y-6">

            {users.map((user: any) => {

              const userOrders =
                orders.filter(
                  (o: any) =>
                    o.user === user.email
                )

              return (

                <div
                  key={user._id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold">

                        {user.name}

                      </h2>

                      <p className="text-gray-400 mt-2">

                        {user.email}

                      </p>

                    </div>

                    <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">

                      Active

                    </div>

                  </div>

                  <div className="mt-6">

                    <p className="text-gray-400 mb-3">

                      Purchased Products

                    </p>

                    {userOrders.length === 0 ? (

                      <p className="text-gray-500">

                        No Purchases Yet

                      </p>

                    ) : (

                      <div className="flex flex-wrap gap-3">

                        {userOrders.map(
                          (
                            order: any,
                            index: number
                          ) => (

                            <div
                              key={index}
                              className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl"
                            >

                              {order.product.join(
                                ", "
                              )}

                            </div>

                          )
                        )}

                      </div>

                    )}

                  </div>

                </div>

              )
            })}

          </div>

        )}

      </main>

    </div>
  )
}