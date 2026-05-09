"use client"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { div } from "framer-motion/m"
export default function CartDrawer({
open,
setOpen,
}: {
open: boolean
setOpen: any
}) {
const {
cart,
increaseQty,
decreaseQty,
removeFromCart,
} = useCart()
const total = cart.reduce(
(acc: number, item: any) =>
acc + item.price * item.quantity,
0
)
return (
<>
{open && (
<div
className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
onClick={() => setOpen(false)}
/>
)}
<div
className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50
shadow-2xl transition-transform duration-300 flex flex-col ${
open ? "translate-x-0" : "translate-x-full"
}`}
>
{/* Header */}
<div className="p-6 border-b flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold text-gray-900">
Your Cart
</h2>
5
<p className="text-gray-500 text-sm mt-1">
{cart.length} item(s)
</p>
</div>
<button
onClick={() => setOpen(false)}
className="text-2xl text-gray-500 hover:text-black"
>
✕
</button>
</div>
{/* Cart Items */}
<div className="flex-1 overflow-y-auto p-6 space-y-5">
{cart.length === 0 ? (
<div className="text-center mt-20">
<ShoppingBag className="mx-auto text-gray-300 w-16 h-16" />
<p className="text-gray-500 mt-4">
Your cart is empty
</p>
</div>
) : (
cart.map((item: any) => (
<div
key={item._id}
className="border rounded-2xl p-4"
>
<div className="flex justify-between">
<div>
<h3 className="font-bold text-gray-900">
{item.name}
</h3>
<p className="text-blue-700 font-semibold mt-2">
₹{item.price}
</p>
</div>
<button
onClick={() => removeFromCart(item._id)}
className="text-red-500"
>
<Trash2 size={18} />
</button>
</div>
6
{/* Qty */}
<div className="flex items-center gap-3 mt-4">
<button
onClick={() => decreaseQty(item._id)}
className="w-9 h-9 rounded-full bg-gray-100 flex itemscenter justify-center"
>
<Minus size={16} />
</button>
<span className="font-semibold text-lg">
{item.quantity}
</span>
<button
onClick={() => increaseQty(item._id)}
className="w-9 h-9 rounded-full bg-blue-600 text-white flex
items-center justify-center"
>
<Plus size={16} />
</button>
</div>
</div>
))
)}
</div>
{/* Footer */}
<div className="border-t p-6 bg-gray-50">
<div className="flex justify-between items-center mb-5">
<span className="text-lg font-medium text-gray-600">
Total
</span>
<span className="text-3xl font-bold text-blue-700">
₹{total}
</span>
</div>
<Link href="/cart">
<button className="w-full bg-gradient-to-r from-blue-600 toindigo-700 text-white py-4 rounded-2xl font-semibold text-lg hover:opacity-90
transition">
View Cart & Checkout
</button>
</Link>
</div>
7
</div>
</>
)
}