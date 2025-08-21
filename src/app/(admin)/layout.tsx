import Navbar from "@/app/components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
