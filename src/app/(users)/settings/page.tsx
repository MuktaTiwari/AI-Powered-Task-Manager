
"use client";



import Table from "@/app/components/Table";
import axios from "axios";
import { useEffect, useState } from "react";





interface MyTask{

  id: number;
  taskName: string;
  status: string;
  priority: string;
  assignedTo: string;
}


export default function DashboardPage() {

  const [myTask , setMyTask] = useState([]);


  useEffect(()=>{

    const fetchMyTask = async () =>{

      try {

        const res = await axios.get("/data/mytasks.json");
        setMyTask(res.data);
      }
      catch(error){
        console.log("Error Fetching MyTasks :", error);
      }
    };

    fetchMyTask();
  }, [])



  const columns = [

    {key: "id", label: "ID"},
    {key: "taskName", label: "TaskName"},
    {key: "status", label: "Status"},
    {key: "priority", label: "Priority"},
    {key: "assignedTo", label: "AssignedTo"},
  ]
  


  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-black">My Task</h1>
      <Table columns={columns} data={myTask}/>
    </div>
  );
}
