// // components/ProductCard.tsx

// type Props = {
//   name: string
//   price: number
//   description?: string
//   features?: string[]
// }

// export default function ProductCard({
//   name,
//   price,
//   description,
//   features = []
// }: Props) {
//   return (
//     <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
//       <h2 className="text-xl font-semibold">{name}</h2>

//       {description && (
//         <p className="text-gray-500 mt-2">{description}</p>
//       )}

//       <p className="text-2xl font-bold mt-4">₹ {price}</p>

//       <ul className="mt-4 space-y-1 text-sm">
//         {features.map((f, i) => (
//           <li key={i}>✔ {f}</li>
//         ))}
//       </ul>

//       <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">
//         Buy Now
//       </button>
//     </div>
//   )
// }




"use client"

import { useRouter } from "next/navigation"

export default function ProductCard({ name, price, description }: any) {
  const router = useRouter()

 const handleBuy = () => {
  const user = localStorage.getItem("user")

  if (!user || user === "undefined") {
    alert("Please login first")
    router.push("/login")
    return
  }

  router.push(`/checkout?name=${name}&price=${price}`)
}

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{description}</p>
      <p className="font-bold">₹{price}</p>

      <button
        onClick={handleBuy}
        className="bg-black text-white px-4 py-2 mt-3 rounded"
      >
        Buy Now
      </button>
    </div>
  )
}