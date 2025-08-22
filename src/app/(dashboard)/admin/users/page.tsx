"use client";

import Table from "@/app/components/Table";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  role: string;
};

const columns = [

  { key: "id", label: "ID" },
  { key: "email", label: "Email" },
  { key: "password", label: "Password" },
  { key: "role", label: "role" },
]

export default function ManageUsers() {


  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUSers = async () => {

      try {

        const res = await axios.get("/data/users.json")
        const filteredData = res.data.filter((user: User) => user.role === "user");
        setUsers(filteredData);
      }
      catch (error) {
        console.log("Error Fetching users");
      }
    }

    fetchUSers();

  }, [])





  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-black">Manage Users</h1>
      <p className="text-black">View, add, edit, or remove users from the system here.</p>
      <Table columns={columns} data={users} />
    </div>

  );
}