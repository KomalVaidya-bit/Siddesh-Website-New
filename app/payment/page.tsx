"use client"

import { useSearchParams } from "next/navigation"

export default function PaymentPage() {
  const params = useSearchParams()

  const name = params.get("name")
  const price = params.get("price")

  // 👇 UPI LINK
  const upiLink = `upi://pay?pa=yourupiid@okaxis&pn=Siddesh%20Technologies&am=${price}&cu=INR`

  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Complete Payment</h1>

      {/* Product Info */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl">{name}</h2>
        <p className="text-lg mt-2">₹{price}</p>
      </div>

      {/* QR */}
      <div className="border p-4 rounded">
        <h2 className="mb-3 font-semibold">Scan & Pay</h2>

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiLink)}&size=200x200`}
          alt="QR"
          className="mx-auto"
        />

        <p className="mt-3">UPI ID: 8530713889@ybl</p>
        <p className="text-sm text-gray-500 mt-2">
          Scan this QR using any UPI app
        </p>
      </div>
    </div>
  )
}