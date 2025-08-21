"use client";
import React, { useEffect, useState } from "react";
import TeamCard from "@/app/components/CardLayouts";
import axios from "axios";
export default function TeamsPage() {
  const [teams, setTeams] = useState([]);


  useEffect(()=>{

    const fetchTeams = async ()=>{

        try{
            const res = await axios.get("/data/teams.json")
            setTeams(res.data);

        }
        catch(error){
            console.log("Error Fetching Teams")
        }

    }

    fetchTeams();
  },[])


  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {teams.map((team: any) => (
        <TeamCard
          key={team.id}
          id={team.id}
          teamName={team.teamName}
          project={team.project}
          members={team.members}
        />
      ))}
    </div>
  );
}
