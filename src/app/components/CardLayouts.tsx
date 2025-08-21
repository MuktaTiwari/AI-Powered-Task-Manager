import React from "react";

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface Team {
  id: number;
  teamName: string;
  project: string;
  members: Member[];
}

export default function TeamCard({ teamName, project, members }: Team) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md border">
      <h2 className="text-xl font-bold text-gray-800">{teamName}</h2>
      <p className="text-gray-500 mb-4">Project: {project}</p>
      <div className="grid grid-cols-2 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center bg-gray-50 rounded-lg p-2 shadow-sm"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-12 h-12 rounded-full border"
            />
            <div className="ml-3">
              <p className="text-gray-800 font-medium">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
