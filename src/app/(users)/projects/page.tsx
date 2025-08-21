"use client"; // Needed for hooks

import { useEffect, useState } from "react";

import axios from "axios";

import Table from "@/app/components/Table";

interface Task {
  id: number;
  name: string;
  status: string;
  team: string;
  createdAt: string;
  completedTasks: number;
  totalTasks: number;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/data/projects.json");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

   const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "team", label: "Team" },
    { key: "completedTasks", label: "CompletedTasks"},
    { key: "totalTasks", label: "TotalTasks" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-black">Project</h1>

      <Table columns={columns} data={tasks} />
    </div>
  );
}
