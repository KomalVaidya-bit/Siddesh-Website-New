// "use client"

// import { useSearchParams } from "next/navigation"

// export default function Checkout() {
//   const params = useSearchParams()

//   const name = params.get("name")
//   const price = params.get("price")

//   // 👉 GET USER FROM LOCAL STORAGE
//  const user =
//   typeof window !== "undefined"
//     ? JSON.parse(localStorage.getItem("user") || "{}")
//     : {}

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       <div className="border p-4 rounded w-80">
//         <h2 className="text-xl">{name}</h2>
//         <p className="text-lg font-bold mt-2">₹{price}</p>

//         {/* 👇 THIS IS STEP 2 */}
//        <p className="text-sm mt-2 text-gray-500">
//   Logged in as: {user?.email || "Guest"}
// </p>

//         <button className="bg-black text-white px-4 py-2 mt-4 rounded">
//           Pay Now
//         </button>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useCart } from "@/context/CartContext"

// export default function CheckoutPage() {
//   const { cart } = useCart()

//   const total = cart.reduce(
//     (acc: number, item: any) =>
//       acc + item.price * item.quantity,
//     0
//   )

//   const handlePayment = () => {
//     alert("Razorpay Integration Coming Next")
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-14 px-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

//         {/* LEFT SIDE */}
//         <div className="bg-white rounded-3xl p-10 shadow-sm border">
//           <h1 className="text-5xl font-bold text-gray-900 mb-10">
//             Checkout
//           </h1>

//           {/* Contact */}
//           <div className="space-y-5">
//             <div>
//               <label className="block mb-2 font-medium">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Full Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Phone Number
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your phone number"
//                 className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Address
//               </label>

//               <textarea
//                 placeholder="Enter your address"
//                 className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 h-32"
//               />
//             </div>
//           </div>

//           {/* Payment */}
//           <div className="mt-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-5">
//               Payment Method
//             </h2>

//             <div className="border rounded-2xl p-5 flex items-center justify-between">
//               <div>
//                 <h3 className="font-semibold text-lg">
//                   Razorpay Secure Payment
//                 </h3>

//                 <p className="text-gray-500 text-sm mt-1">
//                   UPI, Cards, Net Banking & Wallets
//                 </p>
//               </div>

//               <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
//                 Secure
//               </div>
//             </div>

//             <button
//               onClick={handlePayment}
//               className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
//             >
//               Pay ₹{total}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-white rounded-3xl p-10 shadow-sm border h-fit sticky top-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Order Summary
//           </h2>

//           <div className="space-y-5">
//             {cart.map((item: any) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-center border-b pb-4"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg">
//                     {item.name}
//                   </h3>

//                   <p className="text-gray-500">
//                     Qty: {item.quantity}
//                   </p>
//                 </div>

//                 <h3 className="font-bold text-blue-700 text-xl">
//                   ₹{item.price * item.quantity}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           {/* Totals */}
//           <div className="mt-8 space-y-4">
//             <div className="flex justify-between text-gray-600">
//               <span>Subtotal</span>
//               <span>₹{total}</span>
//             </div>

//             <div className="flex justify-between text-gray-600">
//               <span>Shipping</span>
//               <span className="text-green-600">
//                 Free
//               </span>
//             </div>

//             <div className="border-t pt-5 flex justify-between items-center">
//               <span className="text-2xl font-bold">
//                 Total
//               </span>

//               <span className="text-4xl font-bold text-blue-700">
//                 ₹{total}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import Script from "next/script"
import { useCart } from "@/context/CartContext"

export default function CheckoutPage() {
  const { cart } = useCart()

  const total = cart.reduce(
    (acc: number, item: any) =>
      acc + item.price * item.quantity,
    0
  )

  const handlePayment = async () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

      amount: total * 100,

      currency: "INR",

      name: "Siddesh Technologies",

      description: "Educational Product Purchase",

      handler: function (response: any) {
        alert(
          "Payment Successful ✅ Payment ID: " +
            response.razorpay_payment_id
        )
      },

      prefill: {
        name: "Customer",
        email: "customer@gmail.com",
        contact: "9999999999",
      },

      notes: {
        address: "Siddesh Technologies",
      },

      theme: {
        color: "#2563eb",
      },
    }

    const razorpay = new (window as any).Razorpay(
      options
    )

    razorpay.open()
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="min-h-screen bg-gray-50 py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border">

            <h1 className="text-5xl font-bold text-gray-900 mb-10">
              Checkout
            </h1>

            <div className="space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                placeholder="Address"
                className="w-full border rounded-xl p-4 h-32"
              />

            </div>

            {/* PAYMENT BOX */}
            <div className="mt-10 border rounded-2xl p-5 bg-blue-50 border-blue-200">

              <h2 className="text-2xl font-bold text-gray-900">
                Razorpay Secure Payment
              </h2>

              <p className="text-gray-600 mt-2">
                Pay using UPI, QR, Cards, Net Banking & Wallets
              </p>

              <button
                onClick={handlePayment}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
              >
                Pay ₹{total}
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border h-fit sticky top-10">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cart.map((item: any) => (

                <div
                  key={item._id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <h3 className="font-bold text-blue-700 text-xl">
                    ₹{item.price * item.quantity}
                  </h3>
                </div>

              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-8 border-t pt-5 flex justify-between items-center">

              <span className="text-2xl font-bold">
                Total
              </span>

              <span className="text-4xl font-bold text-blue-700">
                ₹{total}
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}