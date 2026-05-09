export default function Success() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Order Successful 🎉</h1>
      <p className="mt-4">Your order has been placed successfully.</p>

      <a href="/our-products" className="text-blue-500 mt-4 block">
        Back to Products
      </a>
    </div>
  )
}