"use client";
import { useEffect, useState } from "react";
import CommonSettings from "./CommonSettings";
import AdminSettings from "./AdminSettings";
import UserSettings from "./UserSettings";

export default function SettingsPage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  if (!role) return <p className="p-6 text-gray-500">Loading...</p>;

  return (
    <div className="p-6 text-black space-y-8">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <CommonSettings />

      {role === "admin" && <AdminSettings />}
      {role === "user" && <UserSettings />}
    </div>
  );
}
