"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole !== "user") {
      router.push("/login");
    } else {
      setRole(storedRole);
    }
  }, [router]);

  if (!role) return null; // or loading spinner

  return (
    <div className="flex min-h-screen">
      <Sidebar role="user" />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}