import { FaHome, FaTasks, FaProjectDiagram, FaUsers, FaCog } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
            <h2 className="text-lg font-bold mb-6">My App</h2>
            <ul className="space-y-4">
                <li>
                    <a href="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
                        <FaHome /> Dashboard
                    </a>
                </li>
                <li>
                    <a href="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
                        <FaTasks /> My Tasks
                    </a>
                </li>
                <li>
                    <a href="/projects" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
                        <FaProjectDiagram /> Project
                    </a>
                </li>
                <li>
                    <a href="/team" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
                        <FaUsers /> Team
                    </a>
                </li>
                <li>
                    <a href="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition">
                        <FaCog /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    );
}
