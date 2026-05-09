



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
//   Users,
//   ShoppingCart,
//   LogOut,
// } from "lucide-react"

// export default function AdminPage() {

//   const router = useRouter()

//   const [products, setProducts] = useState<any[]>([])
//   const [users, setUsers] = useState<any[]>([])
//   const [orders, setOrders] = useState<any[]>([])
  

//   const [name, setName] = useState("")
//   const [price, setPrice] = useState("")
//   const [description, setDescription] = useState("")

//   const [editId, setEditId] =
//     useState<string | null>(null)

//   const [activeTab, setActiveTab] =
//     useState("products")

//   // =========================
//   // AUTH
//   // =========================

//   useEffect(() => {

//     const admin =
//       localStorage.getItem("admin")

//     if (!admin) {

//       router.push("/admin/login")

//     }

//     fetchProducts()
//     fetchUsers()
//     fetchOrders()

//   }, [])

//   // =========================
//   // FETCH PRODUCTS
//   // =========================

//   const fetchProducts = async () => {

//     const res =
//       await fetch("/api/products")

//     const data = await res.json()

//     setProducts(data)
//   }

//   // =========================
//   // FETCH USERS
//   // =========================

//   const fetchUsers = async () => {

//     const res =
//       await fetch("/api/users")

//     const data = await res.json()

//     setUsers(data)
//   }

//   // =========================
//   // FETCH ORDERS
//   // =========================

//   const fetchOrders = async () => {

//     const res =
//       await fetch("/api/orders")

//     const data = await res.json()

//     setOrders(data)
//   }

//   // =========================
//   // ADD / UPDATE PRODUCT
//   // =========================

//   const handleAdd = async () => {

//     if (!name || !price) {

//       alert("Fill all fields")

//       return
//     }

//     if (editId) {

//       await fetch("/api/products", {
//         method: "PUT",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body: JSON.stringify({
//           id: editId,
//           name,
//           price,
//           description,
//         }),
//       })

//       alert("Updated ✅")

//       setEditId(null)

//     } else {

//       await fetch("/api/products", {
//         method: "POST",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

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

//   // =========================
//   // DELETE PRODUCT
//   // =========================

//   const handleDelete = async (
//     id: string
//   ) => {

//     await fetch("/api/products", {
//       method: "DELETE",

//       headers: {
//         "Content-Type":
//           "application/json",
//       },

//       body: JSON.stringify({ id }),
//     })

//     fetchProducts()
//   }

//   // =========================
//   // LOGOUT
//   // =========================

//   const handleLogout = () => {

//     localStorage.removeItem("admin")

//     router.push("/admin/login")
//   }

//   // =========================
//   // TOTAL REVENUE
//   // =========================

//   const totalRevenue =
//     orders.reduce(
//       (acc: number, item: any) =>
//         acc + Number(item.amount || 0),
//       0
//     )

//   return (

//     <div className="min-h-screen bg-[#0f172a] text-white flex">

//       {/* SIDEBAR */}
//       <aside className="w-[280px] bg-[#111827] border-r border-white/10 p-6 hidden md:flex flex-col">

//         <div className="flex items-center gap-3 mb-10">

//           <div className="bg-gradient-to-r from-violet-500 to-indigo-500 p-3 rounded-xl">

//             <LayoutDashboard size={22} />

//           </div>

//           <div>

//             <h1 className="text-xl font-bold">
//               Admin Panel
//             </h1>

//             <p className="text-sm text-gray-400">
//               Store Management
//             </p>

//           </div>

//         </div>

//         {/* NAVIGATION */}

//         <div className="space-y-3 flex-1">

//           {/* PRODUCTS */}
//           <div
//             onClick={() =>
//               setActiveTab("products")
//             }
//             className={`p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition ${
//               activeTab === "products"
//                 ? "bg-white/10"
//                 : "bg-white/5 hover:bg-white/10"
//             }`}
//           >

//             <Package size={20} />

//             <span>
//               Products
//             </span>

//           </div>

//           {/* USERS */}
//           <div
//             onClick={() =>
//               setActiveTab("users")
//             }
//             className={`p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition ${
//               activeTab === "users"
//                 ? "bg-white/10"
//                 : "bg-white/5 hover:bg-white/10"
//             }`}
//           >

//             <Users size={20} />

//             <div className="flex items-center justify-between w-full">

//               <span>
//                 Users
//               </span>

//               <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">

//                 {users.length}

//               </span>

//             </div>

//           </div>

//           {/* REVENUE */}
//           {/* REVENUE */}
// <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">

//   <IndianRupee size={20} />

//   <span>
//     Revenue
//   </span>

// </div>
//         </div>

//         {/* LOGOUT */}

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold"
//         >

//           <LogOut size={18} />

//           Logout

//         </button>

//       </aside>

//       {/* MAIN */}

//       <main className="flex-1 p-6 md:p-10 overflow-hidden">

//         {/* TOP */}

//         <div className="flex justify-between items-center mb-10">

//           <div>

//             <h1 className="text-4xl font-bold">

//               Dashboard

//             </h1>

//             <p className="text-gray-400 mt-2">

//               Manage products, users & revenue

//             </p>

//           </div>

//         </div>

//         {/* STATS */}

//         <div className="grid md:grid-cols-3 gap-5 mb-10">

//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

//             <p className="text-gray-400">
//               Products
//             </p>

//             <h2 className="text-4xl font-bold mt-3">
//               {products.length}
//             </h2>

//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

//             <p className="text-gray-400">
//               Users
//             </p>

//             <h2 className="text-4xl font-bold mt-3">
//               {users.length}
//             </h2>

//           </div>

//           <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl p-6">

//             <p className="text-white/80">
//               Revenue
//             </p>

//             <h2 className="text-4xl font-bold mt-3">
//               ₹{totalRevenue}
//             </h2>

//           </div>

//         </div>

//         {/* PRODUCTS */}

//         {activeTab === "products" && (

//           <>

//             {/* FORM */}

//             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

//               <h2 className="text-2xl font-bold mb-6">

//                 {editId
//                   ? "Edit Product"
//                   : "Add Product"}

//               </h2>

//               <div className="grid md:grid-cols-3 gap-5">

//                 <input
//                   value={name}
//                   placeholder="Product Name"
//                   onChange={(e) =>
//                     setName(e.target.value)
//                   }
//                   className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
//                 />

//                 <input
//                   value={price}
//                   placeholder="Price"
//                   onChange={(e) =>
//                     setPrice(e.target.value)
//                   }
//                   className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
//                 />

//                 <input
//                   value={description}
//                   placeholder="Description"
//                   onChange={(e) =>
//                     setDescription(
//                       e.target.value
//                     )
//                   }
//                   className="bg-[#1e293b] border border-white/10 rounded-2xl px-5 py-4 outline-none"
//                 />

//               </div>

//               <button
//                 onClick={handleAdd}
//                 className="mt-6 bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-4 rounded-2xl font-semibold"
//               >

//                 {editId
//                   ? "Update Product"
//                   : "Add Product"}

//               </button>

//             </div>

//             {/* PRODUCTS GRID */}

//             <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

//               {products.map((p: any) => (

//                 <div
//                   key={p._id}
//                   className="bg-white/5 border border-white/10 rounded-3xl p-6"
//                 >

//                   <h3 className="text-2xl font-bold mb-2">

//                     {p.name}

//                   </h3>

//                   <p className="text-gray-400 mb-5">

//                     {p.description}

//                   </p>

//                   <div className="text-3xl font-bold mb-6">

//                     ₹{p.price}

//                   </div>

//                   <div className="flex gap-3">

//                     <button
//                       onClick={() => {

//                         setName(p.name)

//                         setPrice(p.price)

//                         setDescription(
//                           p.description
//                         )

//                         setEditId(p._id)
//                       }}
//                       className="flex-1 bg-blue-500/20 hover:bg-blue-500 py-3 rounded-2xl"
//                     >

//                       Edit

//                     </button>

//                     <button
//                       onClick={() =>
//                         handleDelete(p._id)
//                       }
//                       className="flex-1 bg-red-500/20 hover:bg-red-500 py-3 rounded-2xl"
//                     >

//                       Delete

//                     </button>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </>

//         )}

//         {/* USERS */}

//         {activeTab === "users" && (

//           <div className="space-y-6">

//             {users.map((user: any) => {

//               const userOrders =
//                 orders.filter(
//                   (o: any) =>
//                     o.user === user.email
//                 )

//               return (

//                 <div
//                   key={user._id}
//                   className="bg-white/5 border border-white/10 rounded-3xl p-6"
//                 >

//                   <div className="flex justify-between items-center">

//                     <div>

//                       <h2 className="text-2xl font-bold">

//                         {user.name}

//                       </h2>

//                       <p className="text-gray-400 mt-2">

//                         {user.email}

//                       </p>

//                     </div>

//                     <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">

//                       Active

//                     </div>

//                   </div>

//                   <div className="mt-6">

//                     <p className="text-gray-400 mb-3">

//                       Purchased Products

//                     </p>

//                     {userOrders.length === 0 ? (

//                       <p className="text-gray-500">

//                         No Purchases Yet

//                       </p>

//                     ) : (

//                       <div className="flex flex-wrap gap-3">

//                         {userOrders.map(
//                           (
//                             order: any,
//                             index: number
//                           ) => (

//                             <div
//                               key={index}
//                               className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl"
//                             >

//                               {order.product.join(
//                                 ", "
//                               )}

//                             </div>

//                           )
//                         )}

//                       </div>

//                     )}

//                   </div>

//                 </div>

//               )
//             })}

//           </div>

//         )}

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
  LayoutDashboard,
  Users,
  LogOut,
  MessageSquare,
  Trash2,
} from "lucide-react"

export default function AdminPage() {

  const router = useRouter()

  const [products, setProducts] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [messages, setMessages] = useState<any[]>([])

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
    fetchMessages()

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
  // FETCH MESSAGES
  // =========================

  const fetchMessages = async () => {

    const res =
      await fetch("/api/messages")

    const data = await res.json()

    setMessages(data)
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
  // DELETE MESSAGE
  // =========================

  const handleDeleteMessage =
    async (id: string) => {

      await fetch("/api/messages", {

        method: "DELETE",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          id,
        }),
      })

      fetchMessages()
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

          {/* MESSAGES */}
          <div
            onClick={() =>
              setActiveTab("messages")
            }
            className={`p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition ${
              activeTab === "messages"
                ? "bg-white/10"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >

            <MessageSquare size={20} />

            <div className="flex items-center justify-between w-full">

              <span>
                Messages
              </span>

              <span className="bg-green-500 text-xs px-2 py-1 rounded-full">

                {messages.length}

              </span>

            </div>

          </div>

          {/* REVENUE */}
          <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">

            <IndianRupee size={20} />

            <span>
              Revenue
            </span>

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

        {/* MESSAGES */}

        {activeTab === "messages" && (

          <div>

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-4xl font-bold">

                Contact Messages

              </h2>

              <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-2xl">

                {messages.length} Messages

              </div>

            </div>

            <div className="space-y-6">

              {messages.map((msg: any) => (

                <div
                  key={msg._id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                      <h3 className="text-2xl font-bold">

                        {msg.name}

                      </h3>

                      <p className="text-blue-400 mt-2">

                        {msg.email}

                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm h-fit">

                        New Message

                      </div>

                      <button
                        onClick={() =>
                          handleDeleteMessage(
                            msg._id
                          )
                        }
                        className="bg-red-500/20 hover:bg-red-500 transition p-3 rounded-xl"
                      >

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </div>

                  <div className="mt-6">

                    <p className="text-lg font-semibold mb-2">

                      Subject

                    </p>

                    <p className="text-gray-300">

                      {msg.subject}

                    </p>

                  </div>

                  <div className="mt-6">

                    <p className="text-lg font-semibold mb-2">

                      Message

                    </p>

                    <p className="text-gray-400 leading-8">

                      {msg.message}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </main>

    </div>
  )
}