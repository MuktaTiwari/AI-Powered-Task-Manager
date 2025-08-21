export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-black">Dashboard</h2>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:scale-95 transition">
        Logout
      </button>
    </nav>
  );
}
