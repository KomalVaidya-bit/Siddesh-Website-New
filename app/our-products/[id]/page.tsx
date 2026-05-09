// app/our-products/[id]/page.tsx

import Layout from "@/components/our-product/layout"

export default function ProductDetails() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
          Product Image
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            IoT Training Kit
          </h1>

          <p className="text-gray-500 mt-4">
            Complete IoT learning solution with hands-on hardware and guided projects.
          </p>

          <p className="text-3xl font-bold mt-6">
            ₹4999
          </p>

          <button className="mt-6 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>
      </div>
    </Layout>
  )
}