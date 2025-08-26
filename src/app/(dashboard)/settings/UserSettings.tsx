"use client";
import { useState } from "react";
import { FaBell, FaProjectDiagram } from "react-icons/fa";
import { Button, Card, CardContent } from "@mui/material";
import Popup from "@/app/components/Popup";
export default function UserSettings() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <>
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaBell className="text-green-600" /> User Preferences
          </h2>
          <p className="text-gray-600">Customize your notifications and project preferences.</p>
          <div className="flex flex-col gap-3">
            <Button
              variant="contained"
              color="success"
              startIcon={<FaBell />}
              onClick={() => setActivePopup("notificationSettings")}
            >
              Notification Settings
            </Button>
            <Button
              variant="outlined"
              color="success"
              startIcon={<FaProjectDiagram />}
              onClick={() => setActivePopup("projectPreferences")}
            >
              Project Preferences
            </Button>
          </div>
        </CardContent>
      </Card>

      <Popup isOpen={activePopup === "notificationSettings"} onClose={() => setActivePopup(null)} title="Notification Settings">
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Email Notifications
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Push Notifications
        </label>
      </Popup>

      <Popup isOpen={activePopup === "projectPreferences"} onClose={() => setActivePopup(null)} title="Project Preferences">
        <select className="w-full border rounded px-3 py-2">
          <option>Kanban View</option>
          <option>List View</option>
          <option>Calendar View</option>
        </select>
      </Popup>
    </>
  );
}
