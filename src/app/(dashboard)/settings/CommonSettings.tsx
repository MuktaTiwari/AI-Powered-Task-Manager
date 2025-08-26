"use client";
import { useState } from "react";
import { FaUser, FaLock, FaPalette } from "react-icons/fa";
import { Button, Card, CardContent } from "@mui/material";
import Popup from "@/app/components/Popup";

export default function CommonSettings() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <>
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaUser className="text-blue-600" /> Profile Settings
          </h2>
          <p className="text-gray-600">Update your name, email, and password.</p>
          <div className="flex gap-4">
            <Button
              variant="contained"
              color="primary"
              startIcon={<FaUser />}
              onClick={() => setActivePopup("editProfile")}
            >
              Edit Profile
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<FaLock />}
              onClick={() => setActivePopup("changePassword")}
            >
              Change Password
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaPalette className="text-purple-600" /> Theme
          </h2>
          <p className="text-gray-600">Choose your personal dashboard theme.</p>
          <div className="flex gap-3">
            <Button variant="contained" color="primary">Light Mode</Button>
            <Button variant="outlined" color="secondary">Dark Mode</Button>
          </div>
        </CardContent>
      </Card>

      <Popup isOpen={activePopup === "editProfile"} onClose={() => setActivePopup(null)} title="Edit Profile">
        <form className="space-y-4">
          <input className="w-full border rounded px-3 py-2" placeholder="Full Name" />
          <input className="w-full border rounded px-3 py-2" placeholder="Email" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </form>
      </Popup>

      <Popup isOpen={activePopup === "changePassword"} onClose={() => setActivePopup(null)} title="Change Password">
        <form className="space-y-4">
          <input type="password" placeholder="Old Password" className="w-full border rounded px-3 py-2" />
          <input type="password" placeholder="New Password" className="w-full border rounded px-3 py-2" />
          <input type="password" placeholder="Confirm Password" className="w-full border rounded px-3 py-2" />
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Update</button>
        </form>
      </Popup>
    </>
  );
}
