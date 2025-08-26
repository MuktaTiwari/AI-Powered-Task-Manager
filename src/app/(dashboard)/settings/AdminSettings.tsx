"use client";
import { useState } from "react";
import { FaCog, FaUsers, FaDatabase } from "react-icons/fa";
import { Button, Card, CardContent } from "@mui/material";
import Popup from "@/app/components/Popup";

export default function AdminSettings() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <>
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaCog className="text-red-600" /> Admin Controls
          </h2>
          <p className="text-gray-600">Manage system-wide preferences and user permissions.</p>
          <div className="flex flex-col gap-3">
            <Button
              variant="contained"
              color="error"
              startIcon={<FaUsers />}
              onClick={() => setActivePopup("manageUsers")}
            >
              Manage Users
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<FaDatabase />}
              onClick={() => setActivePopup("systemSettings")}
            >
              System Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      <Popup isOpen={activePopup === "manageUsers"} onClose={() => setActivePopup(null)} title="Manage Users">
        <p>Here you can add, edit, or remove users.</p>
      </Popup>

      <Popup isOpen={activePopup === "systemSettings"} onClose={() => setActivePopup(null)} title="System Settings">
        <p>Here you can configure database and server settings.</p>
      </Popup>
    </>
  );
}
