// "use client"
// import Link from "next/link"
// import { useCart } from "@/context/CartContext"
// import { Minus, Plus, Trash2 } from "lucide-react"
// import {  div } from "framer-motion/client"
// export default function CartPage() {
// const {
// cart,
// increaseQty,
// decreaseQty,
// removeFromCart,
// } = useCart()
// const total = cart.reduce(
// (acc: number, item: any) =>
// acc + item.price * item.quantity,
// 0
// )
// return (
// <div className="min-h-screen bg-gray-50 py-14 px-6">
// <div className="max-w-7xl mx-auto">
// <h1 className="text-5xl font-bold text-gray-900 mb-12">
// Shopping Cart
// </h1>
// <div className="grid lg:grid-cols-3 gap-10">
// {/* Left */}
// <div className="lg:col-span-2 space-y-6">
// {cart.map((item: any) => (
// <div
// key={item._id}

// className="bg-white rounded-3xl p-6 shadow-sm border"
// >
// <div className="flex justify-between items-start">
// <div>
// <h2 className="text-2xl font-bold text-gray-900">
// {item.name}
// </h2>
// <p className="text-gray-500 mt-3 leading-7 max-w-lg">
// {item.description}
// </p>
// <h3 className="text-3xl font-bold text-blue-700 mt-5">
// ₹{item.price}
// </h3>
// </div>
// <button
// onClick={() => removeFromCart(item._id)}
// className="text-red-500"
// >
// <Trash2 />
// </button>
// </div>
// {/* Qty */}
// <div className="flex items-center gap-4 mt-8">
// <button
// onClick={() => decreaseQty(item._id)}
// className="w-11 h-11 rounded-full bg-gray-100 flex itemscenter justify-center"
// >
// <Minus size={18} />
// </button>
// <span className="text-xl font-bold">
// {item.quantity}
// </span>
// <button
// onClick={() => increaseQty(item._id)}
// className="w-11 h-11 rounded-full bg-blue-600 text-white
// flex items-center justify-center"
// >
// <Plus size={18} />
// </button>
// </div>
// 9
// </div>
// ))}
// </div>
// {/* Right */}
// <div>
// <div className="bg-white rounded-3xl p-8 shadow-lg border sticky
// top-10">
// <h2 className="text-3xl font-bold text-gray-900 mb-8">
// Order Summary
// </h2>
// <div className="space-y-4 text-gray-600">
// <div className="flex justify-between">
// <span>Subtotal</span>
// <span>₹{total}</span>
// </div>
// <div className="flex justify-between">
// <span>Shipping</span>
// <span className="text-green-600">Free</span>
// </div>
// </div>
// <div className="border-t mt-6 pt-6 flex justify-between itemscenter">
// <span className="text-xl font-semibold">
// Total
// </span>
// <span className="text-4xl font-bold text-blue-700">
// ₹{total}
// </span>
// </div>
// <Link href="/checkout">
// <button className="w-full mt-8 bg-gradient-to-r from-blue-600
// to-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90
// transition">
// Proceed To Checkout
// </button>
// </Link>
// </div>
// </div>
// </div>
// </div>
// </div>

// )
// }




"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartPage() {
    const router = useRouter()

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

    useEffect(() => {
        const user = localStorage.getItem("user")

        if (!user) {
            router.push("/login")
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 py-14 px-6">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl font-bold text-gray-900 mb-12">
                    Shopping Cart
                </h1>

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Left */}
                    <div className="lg:col-span-2 space-y-6">

                        {cart.map((item: any) => (
                            <div
                                key={item._id}
                                className="bg-white rounded-3xl p-6 shadow-sm border"
                            >

                                <div className="flex justify-between items-start">

                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {item.name}
                                        </h2>

                                        <p className="text-gray-500 mt-3 leading-7 max-w-lg">
                                            {item.description}
                                        </p>

                                        <h3 className="text-3xl font-bold text-blue-700 mt-5">
                                            ₹{item.price}
                                        </h3>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-red-500"
                                    >
                                        <Trash2 />
                                    </button>

                                </div>

                                {/* Qty */}
                                <div className="flex items-center gap-4 mt-8">

                                    <button
                                        onClick={() => decreaseQty(item._id)}
                                        className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <span className="text-xl font-bold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQty(item._id)}
                                        className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center"
                                    >
                                        <Plus size={18} />
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Right */}
                    <div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg border sticky top-10">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Order Summary
                            </h2>

                            <div className="space-y-4 text-gray-600">

                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>₹{total}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>

                            </div>

                            <div className="border-t mt-6 pt-6 flex justify-between items-center">

                                <span className="text-xl font-semibold">
                                    Total
                                </span>

                                <span className="text-4xl font-bold text-blue-700">
                                    ₹{total}
                                </span>

                            </div>

                            <Link href="/checkout">
                                <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition">
                                    Proceed To Checkout
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

