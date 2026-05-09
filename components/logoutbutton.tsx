"use client"

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("user")
        window.location.href = "/login"
      }}
      className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  )
}