// components/Layout.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {children}
      </div>
    </div>
  )
}