"use client";
import { Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type Project = {
  id: number;
  name: string;
  status: string;
  team: string;
  createdAt: string;
  completedTasks: number;
  totalTasks: number;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ProjectsLayout() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json"); 
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const totalProjects = projects.length;
  const completed = projects.filter((p) => p.status === "Completed").length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const pending = projects.filter((p) => p.status === "Pending").length;

  const projectStats = [
    { title: "Total Projects", value: totalProjects },
    { title: "Completed Projects", value: completed },
    { title: "Active Projects", value: inProgress },
    { title: "Pending Projects", value: pending },
  ];

  // ✅ Bar chart (group by team)
  const barData = Object.values(
    projects.reduce((acc: any, p) => {
      if (!acc[p.team]) acc[p.team] = { name: p.team, projects: 0 };
      acc[p.team].projects += 1;
      return acc;
    }, {})
  );

  // ✅ Pie chart (status distribution)
  const pieData = [
    { name: "Completed", value: completed },
    { name: "Active", value: inProgress },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="p-6 space-y-6">
                  <p className="text-gray-700 mb-6">Welcome back 👋</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectStats.map((stat, index) => (
          <Card key={index} className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Projects by Team</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#3B82F6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Project Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
